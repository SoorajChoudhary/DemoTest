import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeConatiner from "./HomeConatiner";
import HomeHeader from "./HomeHeader";
import GradientButton from "@src/components/gradientButton";
import Label from "@src/components/label";
import HomeTopBar from "./HomeTopBar";
import WelcomeCard from "./WelcomeCard";
import Banner from "./Banner";
import CasinoGames from "./CasinoGames";
import InplayCard from "./InplayCard";
import MatchList from "./MatchList";
import Games from "./Games";
import WhatsAppBanner from "./WhatsAppBanner";
const HomeScreen = () => {
  return (
    <HomeConatiner>
      <>
        <HomeHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <HomeTopBar />
          <WelcomeCard />
          <Banner />
          <CasinoGames />
          <InplayCard />
          <MatchList />
          <Games/>
          <WhatsAppBanner/>
          <View style={{marginBottom: 100}}/>
        </ScrollView>
      </>
    </HomeConatiner>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
