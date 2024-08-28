import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Label from "@src/components/label";
import { AppColor } from "@src/utils/theme";
import { BEAST, GAME } from "@src/assets/icons";

const Games = () => {
  const renderItem = () => {
    return (
      <View style={styles.view}>
        <Image
          style={{ height: 70, width: 70, resizeMode: "contain" }}
          source={BEAST}
        />
      </View>
    );
  };
  return (
    <View style={styles.gamesView}>
      <Label
        label="Play our"
        fontSize={10}
        fontFamily="Rajdhani-Regular"
        color={"#D9D9D9"}
      />
      <Label
        label="Featured Games"
        fontSize={22}
        color={AppColor.white}
        fontFamily="Rajdhani-Bold"
      />
      <FlatList showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
      />
      <FlatList showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
      />
      <FlatList showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({
  gamesView: {
    backgroundColor: "#242939",
    alignSelf: "center",
    padding: 10,
    width: "90%",
    borderRadius: 10,
  },
  view: { width: 70, height: 70, overflow: "hidden", marginRight: 5 },
});
