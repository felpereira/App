import { StyleSheet, View, Text, Button } from "react-native";
import { getTheme } from "../../modules/theme";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count);
    }
  };

  return (
    <View style={styles.container}>
      <Text>ABOUT</Text>
      <Button title="Maybe dismiss" onPress={() => handleDismiss(3)} />
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
