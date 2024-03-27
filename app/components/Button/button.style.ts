import { StyleSheet, DimensionValue } from "react-native";
import { getTheme } from "../../modules/theme";

export interface StyleProps {
  width?: DimensionValue;
  gap?: number;
  flexDirection?: "row";
}

const theme = getTheme();

const styles = (props?: StyleProps) =>
  StyleSheet.create({
    buttonStyle: {
      height: 45,
      backgroundColor: theme.Primary,
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: props?.flexDirection,
      gap: props?.gap,
      width: props ? props.width : "40%",
    },
    buttonText: {
      color: theme.textPrimary,
      fontSize: 16,
    },
  });

export default styles;
