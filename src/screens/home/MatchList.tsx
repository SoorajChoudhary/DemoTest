import {
  ColorValue,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";
import { BAT, GRAVITY, LIVE, STAR } from "@src/assets/icons";
import Label from "@src/components/label";

const MatchList = () => {
  const renderItem = () => {
    return (
      <View style={{ width: "90%", alignSelf: "center", marginBottom: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={BAT}
            style={{ height: 10, width: 10, tintColor: "#AEB3E2", marginRight: 5 }}
          />
          <Label style={{flex:1}}
            label="United States - Major League Cricket"
            fontSize={10}
            fontFamily="Rajdhani-Medium"
            color={"#AEB3E2"}
          />
          <Image
            source={STAR}
            style={{ height: 10, width: 10, tintColor: "#AEB3E2", marginRight: 5 }}
          />
        </View>
        <View style={styles.listView}>
          <MatchListHeader />
          <View style={styles.label}>
            <Image source={BAT} style={styles.bat} />
            <Label
              label="Los Angeles Knight Riders"
              fontSize={10}
              color={AppColor.white}
              fontFamily="Rajdhani-Bold"
            />
            <Label
              label=" vs "
              fontSize={8}
              color={"#AEB3E2"}
              fontFamily="Rajdhani-Bold"
            />
            <Label
              label="Los Angeles Knight Riders"
              fontSize={10}
              color={AppColor.white}
              fontFamily="Rajdhani-Bold"
            />
          </View>
          <View style={[styles.label, { justifyContent: "space-between" }]}>
            <View style={[styles.label, { marginTop: 0 }]}>
              <ColorTag />
              <ColorTag left={5} color={"#D141F6"} />
            </View>
            <View style={[styles.label, { marginTop: 0 }]}>
              <ColorTag shadow />
              <ColorTag left={5} shadow color={"#D141F6"} />
            </View>
            <View style={[styles.label, { marginTop: 0 }]}>
              <ColorTag />
              <ColorTag left={5} color={"#D141F6"} />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={{ marginTop: 15 }}
      scrollEnabled={false}
      data={[1, 2, 3]}
      renderItem={renderItem}
    />
  );
};

export default MatchList;

const MatchListHeader = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={GRAVITY} style={styles.icon} />
      <Label
        style={{ flex: 1 }}
        label="Tomorrow, 04:30"
        color={"#AEB3E2"}
        fontFamily="Rajdhani-Medium"
        fontSize={8}
      />
      <View style={styles.round} />
      <Image source={LIVE} style={styles.live} />
      <View style={styles.tag}>
        <Label
          label="XTRA"
          fontSize={6}
          color={AppColor.white}
          fontFamily="Rajdhani-Bold"
        />
      </View>
      <View style={[styles.tag, styles.left]}>
        <Label
          label="FM"
          fontSize={6}
          color={AppColor.white}
          fontFamily="Rajdhani-Bold"
        />
      </View>
      <View style={[styles.tag, styles.left]}>
        <Label
          label="BM"
          fontSize={6}
          color={AppColor.white}
          fontFamily="Rajdhani-Bold"
        />
      </View>
      <View style={[styles.tag, styles.left]}>
        <Label
          label="BF"
          fontSize={6}
          color={AppColor.white}
          fontFamily="Rajdhani-Bold"
        />
      </View>
    </View>
  );
};

interface ColorTagProps {
  shadow?: boolean;
  color?: ColorValue;
  left?: number;
}
const ColorTag = ({
  shadow = false,
  color = "#3790FB",
  left = 0,
}: ColorTagProps) => {
  return (
    <View
      style={[styles.tagLabel, { backgroundColor: color, marginLeft: left }]}
    >
      <Label
        fontSize={10}
        color={shadow ? color : AppColor.white}
        label="1.78"
        fontFamily="Rajdhani-Medium"
      />
      <Label
        fontSize={8}
        color={shadow ? color : AppColor.white}
        label="8"
        fontFamily="Rajdhani-Regular"
      />

      {shadow && <View style={styles.shadow} />}
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    width: "100%",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#242939",
    borderRadius: 10,
    marginTop: 5,
  },
  icon: { height: 10, width: 10, resizeMode: "contain", marginRight: 5 },
  round: { height: 8, width: 8, borderRadius: 4, backgroundColor: "#97CC00" },
  live: { height: 15, width: 15, resizeMode: "contain", marginHorizontal: 5 },
  tag: {
    backgroundColor: "#353B4F",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  left: { marginLeft: 5 },
  bat: { height: 12, width: 12, resizeMode: "contain", marginRight: 5 },
  label: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  tagLabel: {
    backgroundColor: "#3790FB",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
    minHeight: 30,
    minWidth: 48,
  },
  shadow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#00000044",
  },
});
