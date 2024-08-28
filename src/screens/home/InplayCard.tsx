import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";
import { CRICKET, FOOTBALL, TENNIS, WATCH } from "@src/assets/icons";
import Label from "@src/components/label";
import GradientButton from "@src/components/gradientButton";

const InplayCard = () => {
  return (
    <View style={styles.card}>
      <Image source={WATCH} resizeMode="contain" style={styles.watch} />
      <Label
        style={styles.label}
        label="Inplay"
        color={AppColor.white}
        fontSize={12}
        fontFamily="Rajdhani-Medium"
      />
      <GradientButton style={styles.cricket}>
       <>
       <Image source={CRICKET} style={styles.image} />
        <Label
          label="Cricket"
          color={AppColor.white}
          fontFamily="Rajdhani-Medium"
          fontSize={10}
        />
       </>
      </GradientButton>
      <View style={[styles.cricket, styles.color]}>
       <>
       <Image source={FOOTBALL} style={[styles.image,{tintColor:'#AEB3E2'}]} />
        <Label 
          label="Football"
          color={"#AEB3E2"}
          fontFamily="Rajdhani-Medium"
          fontSize={10}
        />
       </>
      </View>
      <View style={[styles.cricket, styles.color]}>
       <>
       <Image source={TENNIS} style={[styles.image,{tintColor:'#AEB3E2'}]} />
        <Label
          label="Tennis"
          color={"#AEB3E2"}
          fontFamily="Rajdhani-Medium"
          fontSize={10}
        />
       </>
      </View>
    </View>
  );
};

export default InplayCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#242939",
    marginTop: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  watch: { height: 12, width: 12 },
  label: { flex: 1, marginLeft: 5 },
  cricket: {
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  image: { height: 12, width: 12, marginRight: 5, resizeMode:'contain' },
  color:{backgroundColor:"#2E3549",marginLeft: 10}
});
