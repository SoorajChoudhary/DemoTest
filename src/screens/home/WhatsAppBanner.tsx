import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import {} from "react-native-svg";
import { APP, OVER } from "@src/assets/icons";
import Label from "@src/components/label";
import { AppColor } from "@src/utils/theme";

const WhatsAppBanner = () => {
  return (
    <View style={styles.view}>
      <Image
        source={OVER}
        style={{ height: 130, width: 110, resizeMode: "contain" }}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <Label
          label="GET A NEW ID INSTANTLY"
          fontSize={10}
          fontFamily="Rajdhani-Medium"
          color={"#D141F6"}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Label
            label="OVER"
            fontSize={30}
            fontFamily="Rajdhani-Bold"
            color={AppColor.white}
          />
          <Image source={APP} style={styles.app} />
        </View>

        <Pressable
          style={styles.button}
        >
            <Label label="GET ID NOW" fontFamily="Rajdhani-SemiBold" color={AppColor.white} fontSize={10}/>
        </Pressable>
      </View>
    </View>
  );
};

export default WhatsAppBanner;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },
  app: { height: 30, width: 90, resizeMode: "contain", marginLeft: 5 },
  button:{
    marginTop: 10,
    height: 32,
    width: 118,
    backgroundColor: "#3790FB",
    borderRadius: 5,
    alignItems:"center",
    justifyContent:'center'
  }
});
