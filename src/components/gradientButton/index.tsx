import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

type GradientButtonProps = {
  children?: React.JSX.Element;
  style?: StyleProp<ViewStyle> | undefined
  padding?: number | undefined
};
const GradientButton: React.FC<GradientButtonProps> = ({ children, style, padding = 10 }) => {
  return (
    <LinearGradient
      end={{ x: 0, y: 3}}
      style={[style]}
      colors={[ "#D141F6","#3790FB", "#3790FB", "#3790FB"]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  center: {alignItems:'center', justifyContent:'center'}
});
