import React, { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Colors } from "../../styles/Colors";
import { ButtonNoBG, Container, Input, TextSTC } from "../../styles/Global";
import { ADDINC, RecordType } from "../../types/balanse";
import { Picker } from "@react-native-picker/picker";
import { incomeCategories } from "../../data/data";
import { Feather } from "@expo/vector-icons";
import { connect, ConnectedProps } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeNavigatorParams } from "../../types/routes";
import { UPDATEVALUE } from "../../types/auth-types";

interface Props extends RXProps {
  navigation: StackNavigationProp<HomeNavigatorParams, "addexp">;
}

const AddIncome = ({ navigation, addInc, updateBalance }: Props) => {
  const [record, setRecord] = useState<RecordType>({
    amount: 0,
    category: "Select Income Category",
    type: "Income",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return (
    <SafeAreaView>
      <Container>
        <TextSTC size="30px" family="bold" gap="30px 0 20px 0">
          Add Income
        </TextSTC>
        <View style={{ width: "75%" }}>
          <TextSTC family="norm" gap="20px 0 10px 0">
            Select Income Category
          </TextSTC>
        </View>
        <Picker
          selectedValue={record.category}
          style={{
            width: "75%",
            height: 45,
            color: Colors.black,
            backgroundColor: Colors.white,
            padding: 10,
            fontFamily: "semi",
            marginTop: 15,
            marginBottom: 30,
          }}
          onValueChange={(value) => setRecord({ ...record, category: value })}
        >
          {incomeCategories.map((i, k) => (
            <Picker.Item label={i.name} key={k} value={i.name} />
          ))}
        </Picker>
        <View style={{ width: "75%" }}>
          <TextSTC family="norm" gap="20px 0 10px 0">
            Income Amount
          </TextSTC>
        </View>
        <Input
          value={record.amount}
          keyboardType="number-pad"
          placeholder="Amount"
          placeholderTextColor={Colors.black}
          onChangeText={(text) =>
            setRecord({ ...record, amount: parseFloat(text) })
          }
        />
        <ButtonNoBG
          onPress={() => {
            addInc(record);
            updateBalance(record.amount);
            navigation.navigate("homeinfo");
          }}
        >
          <TextSTC family="semi" size="20px" gap="0 7px 0 0">
            Add To Income
          </TextSTC>
          <Feather name="chevron-right" size={24} color={Colors.black} />
        </ButtonNoBG>
      </Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.blueWhite} />
    </SafeAreaView>
  );
};

const mapDispatch = {
  addInc: (data: RecordType) => ({
    type: ADDINC,
    payload: data,
  }),
  updateBalance: (data: number) => ({
    type: UPDATEVALUE,
    payload: data,
  }),
};

const connector = connect(null, mapDispatch);
type RXProps = ConnectedProps<typeof connector>;

export default connector(AddIncome);
