import { TouchableOpacity, Text } from "react-native";
import React, { useMemo } from "react";
import styles, { StyleProps } from "./button.style";

interface ButtonProps {
  text: string;
  onPress: () => void;
  Icon?: React.ReactElement;
  style?: StyleProps;
}

/**
 * Renders a button with the provided text and an optional icon, and triggers the `onPress` function when pressed.
 * @param text - The text to be displayed on the button.
 * @param onPress - The function to be called when the button is pressed.
 * @param Icon - An optional icon component to be displayed before the text.
 * @param style - An optional object containing additional styles for the button.
 * @returns The rendered TouchableOpacity component with the provided text and optional icon.
 */
export default function Button({
  text,
  onPress,
  Icon,
  style,
}: Readonly<ButtonProps>) {
  const buttonStyle = useMemo(() => styles(style).buttonStyle, [style]);

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {Icon && Icon}
      <Text style={styles().buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
