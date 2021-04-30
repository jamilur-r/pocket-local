import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, SafeAreaView, StatusBar } from "react-native";
import { ButtonNoBG, Container, TextSTC } from "../../styles/Global";
import { StackNavigatorParams } from "../../types/routes";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../styles/Colors";

interface Props {
  navigation: StackNavigationProp<StackNavigatorParams, "splash">;
}
const SplashScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 200, height: 135.34 }}
        />
        <TextSTC size="32px" family="bold" gap="20px 0">
          Pocket
        </TextSTC>
        <TextSTC family="med" style={{ textAlign: "center" }}>
          Track Your Daily Expenditure
        </TextSTC>
        <ButtonNoBG onPress={() => navigation.navigate("signin")}>
          <TextSTC family="semi" size="20px" gap="0 7px 0 0">
            Get Started
          </TextSTC>
          <Feather name="chevron-right" size={24} color={Colors.black} />
        </ButtonNoBG>
      </Container>
      <StatusBar barStyle="dark-content" backgroundColor="#DAE8FE" />
    </SafeAreaView>
  );
};

export default SplashScreen;
