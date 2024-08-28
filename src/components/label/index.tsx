import { ColorValue, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type LabelProps = React.PropsWithChildren<{
  fontFamily:
    | "Rajdhani-Bold"
    | "Rajdhani-Medium"
    | "Rajdhani-SemiBold"
    | "Rajdhani-Regular"
    | undefined;
  label: string;
  testID?: string | undefined;
  fontSize?: number | undefined;
  textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
  color?: ColorValue;
  style?: TextStyle;
  accessibilityLabel?: string | undefined;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through"
    | undefined;
}>;
const Label: React.FC<LabelProps> = ({
  fontFamily,
  label,
  testID,
  fontSize = 16,
  textAlign,
  color,
  style,
  accessibilityLabel,
  textDecorationLine,
}) => {

 
  return (
    <Text
      style={[
        { fontSize, fontFamily, textAlign, color, textDecorationLine},
        style,
      ]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      {label}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({});
