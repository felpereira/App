import { StyleSheet } from "react-native";
import { getTheme } from "../../modules/theme";

const theme = getTheme();

const styles = StyleSheet.create({
  texto: {
    color: theme.textPrimary,
    fontSize: 16,
  },
  input: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: theme.textPrimary,
    borderRadius: 10,
    color: theme.textPrimary,
  },
});

export default styles;
