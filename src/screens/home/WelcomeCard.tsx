import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";
import GradientButton from "@src/components/gradientButton";
import { DEPOSIT, GIFT, REFRESH } from "@src/assets/icons";
import Label from "@src/components/label";

const WelcomeCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Label
          label="Welcome, Username"
          fontFamily="Rajdhani-Medium"
          color={AppColor.white}
          fontSize={12}
        />
        <View style={styles.rupee}>
        <Label
          label="5000.00"
          fontFamily="Rajdhani-Bold"
          color={AppColor.white}
          fontSize={16}
        />
        <Image source={REFRESH} style={{height: 13, width: 13, marginLeft: 5}}/>
        </View>
        <View style={styles.rupee}>
        <Label
          label="EXPOSURE:  "
          fontFamily="Rajdhani-Medium"
          color={"#FF4242"}
          fontSize={8}
        />
        <Label
          label="2000"
          fontFamily="Rajdhani-SemiBold"
          color={AppColor.white}
          fontSize={10}
        />
        </View>
      </View>
      <GradientButton style={styles.card}>
        <>
          <Image source={DEPOSIT} style={styles.icon} />
          <Label
            label="Deposit"
            color={AppColor.white}
            fontFamily="Rajdhani-SemiBold"
            fontSize={8}
          />
        </>
      </GradientButton>

      <View style={[styles.card, styles.color]}>
        <Image source={DEPOSIT} style={[styles.icon, styles.transform]} />
        <Label
          label="Withdrawal"
          color={AppColor.white}
          fontFamily="Rajdhani-SemiBold"
          fontSize={8}
        />
      </View>

      <View style={[styles.card, styles.color]}>
        <Image source={GIFT} style={[styles.icon]} />
        <Label
          label="Claim Bonus"
          color={AppColor.white}
          fontFamily="Rajdhani-SemiBold"
          fontSize={8}
        />
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: AppColor.primary,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  card: {
    height: 53,
    width: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 21,
    width: 21,
    marginBottom: 3,
    resizeMode: "contain",
  },
  color: { backgroundColor: "#464965", marginLeft: 10 },
  transform: { transform: [{ rotate: "180deg" }] },
  rupee:{flexDirection:'row', alignItems:'center', marginTop: 2}
});
