import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AppColor } from "@src/utils/theme";
import Label from "@src/components/label";
import { GOOGLE } from "@src/assets/icons";
type InheritanceTouchProps = Pick<
  TouchableOpacity["props"],
  "testID" | "onPress" | "accessibilityLabel" | "disabled" | "style"
>;

type LoginButtonProps = React.PropsWithChildren<{} & InheritanceTouchProps>;
const LoginButton: React.FC<LoginButtonProps> = ({
  testID,
  accessibilityLabel,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={[style, styles.button]}
    >
      <Image style={styles.image} source={GOOGLE} />
      <Label
        accessibilityLabel="Continue with Google"
        color={AppColor.primary}
        fontFamily={"Rajdhani-SemiBold"}
        label={"Continue with Google"}
      />
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    
    backgroundColor: AppColor.white,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal:40
  },
  image: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
});
