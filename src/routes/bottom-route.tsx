import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";
import HomeRoute from "./home-route";

const Tab = createBottomTabNavigator();

const BottomRoute = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.black,
        showLabel: false,
        adaptive: true,
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={HomeRoute}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="pocket" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoute;
