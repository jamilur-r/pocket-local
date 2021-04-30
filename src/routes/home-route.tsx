import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/main/HomeScreen";
import AddExpense from "../screen/main/AddExpense";
import AddIncme from "../screen/main/AddIncme";
import TranEdit from "../screen/main/TranEdit";

const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homeinfo" component={HomeScreen} />
      <Stack.Screen name="addexp" component={AddExpense} />
      <Stack.Screen name="addinc" component={AddIncme} />
      <Stack.Screen name="tranedit" component={TranEdit} />
    </Stack.Navigator>
  );
};

export default HomeRoute;
