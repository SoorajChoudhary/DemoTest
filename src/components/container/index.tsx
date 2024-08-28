import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Children } from "react";
import { AppColor } from "@src/utils/theme";
import { BACKGROUND } from "@src/assets/icons";
interface ContainerProps {
  children?: React.JSX.Element;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={{...styles.container,...styles.image}} source={BACKGROUND}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    padding:20
  },
});
