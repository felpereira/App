import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getTheme } from "./modules/theme";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import BoardService, { BoardModel } from "./modules/services/Board";

const FIRST_TABLE = "Migrations";

export default function Home() {
  const [listaBoard, setListaBoard] = useState<BoardModel[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadFiles = async () => {
      const boardController = new BoardService();
      const list = await boardController.listAllAsync();
      setListaBoard(list);
    };

    loadFiles();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={theme.backgroundColorPrimary} />
      {listaBoard
        ? listaBoard.map((x) => (
            <View
              key={x.descricao}
              style={{
                borderWidth: 2,
                width: "90%",
                height: 100,
                marginBottom: 10,
                borderRadius: 10,
                padding: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  borderBottomWidth: 2,
                }}
              >
                {x.ordenacao}
                {" - "}
                {x.descricao}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
}

const theme = getTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColorPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
});
