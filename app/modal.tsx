import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite/next";
import { getTheme } from "./modules/theme";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import { useState } from "react";

export default function ModalScreen() {
  const [descricao, setDescricao] = useState("");
  const [ordenacao, setOrdenacao] = useState("");

  const handleVoltar = () => {
    router.back();
  };

  const handleSalvarAsync = async () => {
    console.log(ordenacao);
    if (!descricao || !ordenacao) {
      console.log("return");
      return;
    }
    const db = await SQLite.openDatabaseAsync("banco.db");
    console.log(ordenacao);

    const row = await db.getFirstAsync<{ ordenacao: number }>(
      "SELECT ordenacao FROM Board WHERE ordenacao = ?",
      ordenacao
    );
    console.log("row", row);

    if (row !== null) {
      return;
    }
    console.log(1);

    const result = await db.runAsync(
      "INSERT INTO Board (descricao, ordenacao) VALUES (?, ?)",
      descricao,
      ordenacao
    );
    console.log("result", result.lastInsertRowId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Input
            texto="Nome da Lista"
            onChange={setDescricao}
            value={descricao}
          />
          <Input
            texto="Ordenacao"
            onChange={setOrdenacao}
            keyboardType="numeric"
            value={ordenacao}
          />
        </View>
        <View style={styles.footer}>
          <Button text={"Voltar"} onPress={handleVoltar} />
          <Button text={"Salvar"} onPress={handleSalvarAsync} />
        </View>
      </View>
    </View>
  );
}

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    backgroundColor: theme.backgroundColorPrimary,
    borderWidth: 2,
    borderColor: theme.border,
    borderRadius: 30,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    height: 45,
    backgroundColor: theme.Primary,
    width: "40%",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.textPrimary,
    fontSize: 16,
  },
  form: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: theme.textPrimary,
    borderRadius: 10,
    color: theme.textPrimary,
  },
});
