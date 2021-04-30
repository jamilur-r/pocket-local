import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Colors } from "../../styles/Colors";
import { Container, TextSTC } from "../../styles/Global";
import { HomeNavigatorParams } from "../../types/routes";

interface Props {
  navigation: StackNavigationProp<HomeNavigatorParams, "tranedit">;
}
const TranEdit = ({ navigation }: Props) => {
  console.log(navigation);

  return (
    <SafeAreaView>
      <Container>
        <TextSTC>hel</TextSTC>
      </Container>
      <StatusBar backgroundColor={Colors.blueWhite} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default TranEdit;
