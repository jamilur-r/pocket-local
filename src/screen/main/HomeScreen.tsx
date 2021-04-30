import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../store";
import { Colors } from "../../styles/Colors";
import { HomeContainer, InfoWrapper, TextSTC } from "../../styles/Global";
import { HomeNavigatorParams } from "../../types/routes";
import { formatter, getGreetings } from "../../utils/utility";
import InfoWidget from "../../widgets/InfoWidget";
import RenderImage from "../../widgets/RenderImage";
import TranHistory from "../../widgets/TranHistory";

interface Props extends RXProps {
  navigation: StackNavigationProp<HomeNavigatorParams, "homeinfo">;
}

const HomeScreen = ({ user, navigation, balance }: Props) => {

  return (
    <SafeAreaView>
      <HomeContainer>
        <TextSTC
          style={{ textAlign: "center" }}
          size="40px"
          family="bold"
          gap="40px 0 0 0"
        >
          Pocket
        </TextSTC>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 25,
          }}
        >
          <View>
            <TextSTC size="18px">{getGreetings()},</TextSTC>
            <TextSTC size="30px" family="semi">
              {user.first_name}
            </TextSTC>
          </View>
          <View>
            <TextSTC size="18px">Current Balance</TextSTC>
            <TextSTC size="26px" family="semi">
              {formatter(user.amount)}
            </TextSTC>
          </View>
        </View>
        <InfoWrapper>
          <TouchableOpacity onPress={() => navigation.navigate("addinc")}>
            <InfoWidget
              title="Net Income"
              icon="up"
              iconColor="green"
              amount={balance.income}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("addexp")}>
            <InfoWidget
              title="Net Expense"
              icon="down"
              iconColor="#F14F4F"
              amount={balance.expense}
            />
          </TouchableOpacity>
        </InfoWrapper>
        <TranHistory navigation={navigation} />
      </HomeContainer>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.blueWhite} />
    </SafeAreaView>
  );
};

const mapState = (state: AppState) => ({
  user: state.auth.user,
  balance: state.balance,
});

const connector = connect(mapState);
type RXProps = ConnectedProps<typeof connector>;

export default connector(HomeScreen);
