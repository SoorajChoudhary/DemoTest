import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import GradientButton from "@src/components/gradientButton";
import { ARROW } from "@src/assets/icons";
import Label from "@src/components/label";
import { AppColor } from "@src/utils/theme";

const HomeTopBar = () => {
  const DATA = [
    { id: 1, label: "LIVE", isTag: false, tag: "" },
    { id: 2, label: "SPORTS", isTag: false, tag: "" },
    { id: 3, label: "CASINO", isTag: false, tag: "" },
    { id: 4, label: "CASINO", isTag: false, tag: "" },
    { id: 5, label: "LIVE CASINO", isTag: false, tag: "" },
    { id: 6, label: "EURO 24", isTag: true, tag: "New" },
    { id: 7, label: "AVIATOR", isTag: true, tag: "Top" },

  ];
  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <View style={{ marginRight: 10 ,justifyContent:'flex-end'}}>
       {item.isTag &&  <GradientButton style={styles.top}>
          <Label
            label={item.tag}
            fontSize={8}
            color={AppColor.white}
            fontFamily={"Rajdhani-SemiBold"}
          />
        </GradientButton>}
        <Label
          label={item.label}
          color={"#AEB3E2"}
          fontFamily="Rajdhani-Medium"
          fontSize={12}
        />
      </View>
    );
  };
  return (
    <View style={styles.topConatiner}>
      <FlatList
        style={{ flex: 1, marginLeft: 20 }}
        horizontal
        data={DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />

      <GradientButton style={styles.button}>
        <Image
          source={ARROW}
          style={{ height: 10, width: 10, resizeMode: "contain" }}
        />
      </GradientButton>
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({
  topConatiner: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: 28,
    width: 20,
  },
  top: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 3,
    alignSelf: "flex-end",
  },
});
