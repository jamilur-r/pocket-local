import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store";
import SplashScreen from "../screen/auth/SplashScreen";
import SignInScreen from "../screen/auth/SignInScreen";
import BottomRoute from "./bottom-route";

const Stack = createStackNavigator();

interface Props extends ReduxProps {}

const BaseRoute = ({ auth }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth ? (
          <>
            <Stack.Screen name="home" component={BottomRoute} />
          </>
        ) : (
          <>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="signin" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapState = (state: AppState) => ({
  auth: state.auth.isAuth,
});

const connector = connect(mapState);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(BaseRoute);
