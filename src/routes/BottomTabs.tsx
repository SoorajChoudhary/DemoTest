import { Image, Platform, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "./type";
import HomeScreen from "@src/screens/home";
import DiscoverScreen from "@src/screens/discover";
import LeaderBoardScreen from "@src/screens/leaderboard";
import ProfileScreen from "@src/screens/profile";
import {
  BOOK,
  CASINO,
  DISCOVER,
  HOME,
  LEADER,
  MORE,
  PLAY,
  PROFILE,
} from "@src/assets/icons";
import { AppColor } from "@src/utils/theme";
const Tab = createBottomTabNavigator<TabStackParamList>();

type IconType = {
  focused: boolean;
  color: string;
  name: string;
};
const BottomTabs = () => {
  const getIcons = (name: string) => {
    switch (name) {
      case "home":
        return HOME;
      case "inplay":
        return PLAY;
      case "book":
        return BOOK;
      case "casino":
        return CASINO;
      case "more":
        return MORE;
      default:
        break;
    }
  };

  const tabBarIcon = (focused: boolean, color: string, name: string) => {
    return <Image source={getIcons(name)} style={[styles.icon]} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: AppColor.white,
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon(focused, color, route.name),
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: { color: AppColor.white,bottom: Platform.OS === "ios" ? -22 : 8 },
        tabBarIconStyle:{top:Platform.OS === 'ios' ? 13 : -2}
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="inplay"
        component={DiscoverScreen}
        options={{ tabBarLabel: "Inplay" }}
      />
      <Tab.Screen
        name="book"
        component={LeaderBoardScreen}
        options={{ tabBarLabel: "Sports Book" }}
      />
      <Tab.Screen
        name="casino"
        component={ProfileScreen}
        options={{ tabBarLabel: "Casino" }}
      />
      <Tab.Screen
        name="more"
        component={ProfileScreen}
        options={{ tabBarLabel: "More" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  tabBarStyle:{
    backgroundColor: AppColor.primary,
    position: "absolute",
    bottom: Platform.OS === 'android' ?  10: 30,
    left: 20,
    width: "90%",
    height:60,
    borderRadius: 10,
    
   
  }
});
