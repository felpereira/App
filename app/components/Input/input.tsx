import { View, Text, TextInput } from "react-native";
import styles from "./input.style";

interface InputProps {
  texto: string;
  onChange: (textInput: string) => void;
  value: string;
  keyboardType?: "default" | "numeric";
}

export default function Input({
  texto,
  onChange,
  keyboardType,
}: Readonly<InputProps>) {
  return (
    <View>
      <Text style={styles.texto}>{texto}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => onChange(e)}
        keyboardType={keyboardType}
      />
    </View>
  );
}
