import React from "react";
import { Image, View } from "react-native";
import { Colors } from "../styles/Colors";

interface Props {
  icon: string;
  background: string;
}
const RenderImage = ({ icon, background }: Props) => {
  const getContent = (icon): React.ReactElement => {
    switch (icon) {
      case "education":
        return (
          <Image
            source={require("../assets/icons/education.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "food":
        return (
          <Image
            source={require("../assets/icons/food.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "loan":
        return (
          <Image
            source={require("../assets/icons/loan.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "resturant":
        return (
          <Image
            source={require("../assets/icons/resturant.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "shopping":
        return (
          <Image
            source={require("../assets/icons/shopping.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "taxi":
        return (
          <Image
            source={require("../assets/icons/taxi.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      case "travel":
        return (
          <Image
            source={require("../assets/icons/travel.png")}
            style={{ width: 50, height: 50 }}
          />
        );
      default:
        return (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        );
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70,
        backgroundColor: background ? background : Colors.black,
        borderRadius: 10,
      }}
    >
      {getContent(icon)}
    </View>
  );
};

export default RenderImage;
