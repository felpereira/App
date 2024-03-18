import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { getTheme } from "./modules/theme";
import Input from "./components/Input/input";
import Button from "./components/Button/button";

export default function ModalScreen() {
  const handleVoltar = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Input texto="Nome da Lista" />
        </View>
        <View style={styles.footer}>
          <Button text={"Voltar"} onPress={handleVoltar} />
          <Button text={"Salvar"} onPress={handleVoltar} />
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
