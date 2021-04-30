import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store";
import { Item, List, TextSTC } from "../styles/Global";
import { RecordType } from "../types/balanse";
import { HomeNavigatorParams } from "../types/routes";
import {
  getCategryIcon,
  getTodaysHistory,
  CatType,
  formatter,
} from "../utils/utility";
import RenderImage from "./RenderImage";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";
import { TouchableOpacity } from "react-native";

interface Props extends RXProps {
  navigation: StackNavigationProp<HomeNavigatorParams, "homeinfo">;
}

const TranHistory = ({ balance, navigation }: Props) => {
  const [item] = useState<Array<RecordType>>(
    getTodaysHistory(balance.expenses, balance.incomes)
  );
  return (
    <List
      data={item}
      keyExtractor={(item) => item.createdAt}
      renderItem={({ item, index }) => {
        let imageData: CatType = getCategryIcon(item.category, item.type);

        return (
          <TouchableOpacity onPress={() => navigation.navigate("tranedit")}>
            <Item key={index} type={item.type}>
              <RenderImage
                icon={imageData.icon}
                background={imageData.background}
              />
              <TextSTC family="med" style={{ width: 90 }}>
                {item.category}
              </TextSTC>
              <TextSTC family="med">{formatter(item.amount)}</TextSTC>
              <Feather name="chevron-right" size={30} color={Colors.black} />
            </Item>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const mapState = (state: AppState) => ({
  balance: state.balance,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(TranHistory);
