import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useEffect, useState } from "react";
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
import { ListRenderItem, TouchableOpacity } from "react-native";

interface Props extends RXProps {
  navigation: StackNavigationProp<HomeNavigatorParams, "homeinfo">;
}

const TranHistory = ({ balance, navigation }: Props) => {
  const [items, setItems] = useState<Array<RecordType | any>>([]);

  useEffect(() =>
    setItems(getTodaysHistory(balance.expenses, balance.incomes))
  );

  const RenderItem = (item: any, index: number) => {
    let imageData: CatType = getCategryIcon(item.category, item.type);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("tranedit", { type: item.type, record: item })
        }
        key={index.toString()}
      >
        <Item type={item.type}>
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
  };
  return (
    <List
      data={items}
      renderItem={({ item, index }) => RenderItem(item, index)}
    />
  );
};

const mapState = (state: AppState) => ({
  balance: state.balance,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(TranHistory);
