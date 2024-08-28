import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import LoginScreen from "@src/screens/login";
import BottomTabs from "./BottomTabs";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
const MainStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      {/* <Screen name="login" component={LoginScreen} /> */}
      <Screen name="bottom" component={BottomTabs} />
    </Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
