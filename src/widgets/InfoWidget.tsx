import React from "react";
import { View } from "react-native";
import { Info, TextSTC } from "../styles/Global";
import { Feather } from "@expo/vector-icons";
import { formatNumbers } from "../utils/utility";

interface Props {
  title: string;
  icon: string;
  iconColor: string;
  amount: number;
}
const InfoWidget = ({ title, icon, iconColor, amount }: Props) => {
  return (
    <Info>
      <TextSTC size="20px" family="med">
        {title}
      </TextSTC>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon === "up" ? (
          <Feather name="arrow-up-right" size={30} color={iconColor} />
        ) : (
          <Feather name="arrow-down-left" size={30} color={iconColor} />
        )}
        <TextSTC size="32px" family="bold">
          {amount === 0 ? "0" : formatNumbers(amount)}
        </TextSTC>
      </View>
    </Info>
  );
};

export default InfoWidget;
