import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AVATAR, BELL, EDIT, MENU, PLUS, SUN } from "@src/assets/icons";
import Label from "@src/components/label";
import { AppColor } from "@src/utils/theme";
import LinearGradient from "react-native-linear-gradient";

const HomeHeader = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={MENU} />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 35,
            marginRight: 15,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#464965",
            overflow: "hidden",
          }}
        >
          <View style={{ alignItems: "center", marginHorizontal: 15 }}>
            <Label
              label="₹589.31"
              fontFamily="Rajdhani-Medium"
              fontSize={15}
              color={AppColor.white}
            />
            <Label
              label="Bonus: ₹0.31"
              fontFamily="Rajdhani-Regular"
              fontSize={12}
              color={"#D3D3D3"}
            />
          </View>
          <View
            style={{
              backgroundColor: "#3790FB",
              height: 35,
              width: 35,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             <Image
          source={PLUS}
          style={{ height: 12, width: 12, resizeMode:'contain'}}
        />
          </View>
        </View>
        <UserImage />
        <Image
          source={BELL}
          style={{ height: 35, width: 35, marginLeft: 30 }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const UserImage = () => {
  return (
    <View>
      <LinearGradient
        end={{ x: 0, y: 0.8 }}
        colors={["#D141F6", "#D141F6", "#D141F6", "#3790FB", "#3790FB"]}
        style={styles.color}
      >
        <View style={styles.imageView}>
          <Image style={styles.userImage} source={AVATAR} />
        </View>
      </LinearGradient>
      <View
        style={styles.edit}
      >
        <Image source={EDIT} style={{height: 10, width: 10, resizeMode: "contain" }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColor.primary,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  image: { height: 13, width: 15 },
  color: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    height: 35,
    width: 35,
    backgroundColor: AppColor.primary,
    borderRadius: 35 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: { height: 28, width: 28, borderRadius: 14 },
  edit:{
    height: 15,
    width: 15,
    borderRadius: 5,
    backgroundColor: "#464965",
    position: "absolute",
    bottom: 0,
    right: -2,
    alignItems:'center',
    justifyContent:'center'
  }
});
