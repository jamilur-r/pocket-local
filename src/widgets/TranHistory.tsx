import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store";
import { TextSTC } from "../styles/Global";
import { RecordType } from "../types/balanse";
import { HomeNavigatorParams } from "../types/routes";
import { getTodaysHistory } from "../utils/utility";

interface Props extends RXProps {
  navigation: StackNavigationProp<HomeNavigatorParams, "homeinfo">;
}

const TranHistory = ({ balance, navigation }: Props) => {
  const [item] = useState<Array<RecordType>>(
    getTodaysHistory(balance.expenses, balance.incomes)
  );
  return (
    <FlatList
      data={item}
      renderItem={(item) => <TextSTC>{item.item.category}</TextSTC>}
    />
  );
};

const mapState = (state: AppState) => ({
  balance: state.balance,
});

const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(TranHistory);
