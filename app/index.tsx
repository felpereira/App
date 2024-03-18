import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getTheme } from "./modules/theme";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={theme.backgroundColorPrimary} />
      <TouchableOpacity
        onPress={() => {
          router.push("modal");
        }}
      >
        <Text>MODAL</Text>
      </TouchableOpacity>
      <Text>Open up Home.tsx to start working on your Home!</Text>
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
