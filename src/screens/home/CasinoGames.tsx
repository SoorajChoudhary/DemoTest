import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";
import { GAME } from "@src/assets/icons";
import Label from "@src/components/label";

const CasinoGames = () => {
  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: AppColor.primary,
          borderRadius: 10,
          marginRight: 5,
          marginLeft: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image style={{ height: 30, width: 32 }} source={GAME} />
        <View style={{ marginLeft: 5 }}>
          <Label
            label="Live Casino"
            fontFamily="Rajdhani-Bold"
            color={AppColor.white}
            fontSize={12}
          />
          <Label
            label="1254 games"
            fontFamily="Rajdhani-Medium"
            color={"#FF7B08"}
            fontSize={10}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 15, paddingLeft: 12, paddingRight: 12 }}>
      <FlatList
        horizontal
        data={[1, 2, 3, 4, 5]}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CasinoGames;

const styles = StyleSheet.create({});
