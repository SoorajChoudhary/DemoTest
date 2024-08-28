import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";

interface HomeConatinerProps {
  children: React.JSX.Element;
}

const HomeConatiner: React.FC<HomeConatinerProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>
    <View style={[styles.container]}>{children}</View>
  </SafeAreaView>;
};

export default HomeConatiner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.darkPrimary,
   
  },
});
