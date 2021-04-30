import React from "react";
import { Image, View } from "react-native";

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
            style={{ width: 150, height: 150 }}
          />
        );
      case "food":
        return (
          <Image
            source={require("../assets/icons/food.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      case "loan":
        return (
          <Image
            source={require("../assets/icons/loan.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      case "resturant":
        return (
          <Image
            source={require("../assets/icons/resturant.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      case "shopping":
        return (
          <Image
            source={require("../assets/icons/shopping.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      case "taxi":
        return (
          <Image
            source={require("../assets/icons/taxi.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      case "travel":
        return (
          <Image
            source={require("../assets/icons/travel.png")}
            style={{ width: 150, height: 150 }}
          />
        );
      default:
        return (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 150, height: 150 }}
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
        width: 200,
        height: 200,
        backgroundColor: background,
        borderRadius: 10,
      }}
    >
      {getContent(icon)}
    </View>
  );
};

export default RenderImage;
