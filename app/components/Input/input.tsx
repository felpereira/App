import { View, Text, TextInput } from "react-native";
import styles from "./input.style";

interface InputProps {
  texto: string;
}

export default function Input({ texto }: Readonly<InputProps>) {
  return (
    <View>
      <Text style={styles.texto}>{texto}</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
}
