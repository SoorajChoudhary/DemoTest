import { StyleSheet, View, Image } from "react-native";
import React from "react";
import {} from "react-native-svg";
import { BANNER } from "@src/assets/icons";

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image source={BANNER} style={styles.image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    height: 164,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 15
  },
  image: { height: 164, width: "100%", resizeMode: "contain" },
});
