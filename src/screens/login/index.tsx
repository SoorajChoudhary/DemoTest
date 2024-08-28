import { StyleSheet, Image,View } from "react-native";
import React from "react";
import Container from "@src/components/container";
import Label from "@src/components/label";
import { AppColor } from "@src/utils/theme";
import { LOGO } from "@src/assets/icons";
import LoginButton from "./LoginButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, SatckParamList } from "@src/routes/type";

const LoginScreen = () => {
  const {navigate} = useNavigation<SatckParamList>();
  return (
    <Container>
      <>
       <View style={styles.view}>
       <Label
          testID="welcome"
          label="Welcome"
          fontSize={35}
          fontFamily={"Rajdhani-Bold"}
          color={AppColor.white}
        />
        <Image style={styles.logo} source={LOGO} />
        <LoginButton
          accessibilityLabel="login-button"
          testID="login-button"
          onPress={() => {navigate('bottom')}}
        />
        <Label
          style={styles.guest}
          fontFamily={"Rajdhani-SemiBold"}
          label={"Continue as Guest"}
          fontSize={20}
          accessibilityLabel="Continue as Guest"
        />
       </View>
       <Label
          style={styles.guest}
          fontFamily={"Rajdhani-SemiBold"}
          label={"Terms & Condition and Privacy Policy"}
          fontSize={15}
          accessibilityLabel="Continue as Guest"
        />
      </>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    height: 220,
    width: 500,
  },
  guest: {
    marginTop: 15,
    color: AppColor.white,
  },
  view:{flex:1,alignItems:'center',justifyContent:'center'}
});
