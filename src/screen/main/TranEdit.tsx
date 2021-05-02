import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Colors } from "../../styles/Colors";
import { Container, TextSTC } from "../../styles/Global";
import { HomeNavigatorParams } from "../../types/routes";

interface Props {
  navigation: StackNavigationProp<HomeNavigatorParams, "tranedit">;
  route: RouteProp<HomeNavigatorParams, "tranedit">;
}
const TranEdit = ({ navigation, route }: Props) => {

  return (
    <SafeAreaView>
      <Container>
        
      </Container>
      <StatusBar backgroundColor={Colors.blueWhite} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default TranEdit;
