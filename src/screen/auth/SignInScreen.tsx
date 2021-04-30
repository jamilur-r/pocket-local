import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { ButtonNoBG, Container, Input, TextSTC } from "../../styles/Global";
import { SIGNIN, User } from "../../types/auth-types";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../styles/Colors";

interface Props extends ReduxProps {}

const SignInScreen = ({ signIn }: Props) => {
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    amount: 0,
    createAt: new Date(),
    updatedAt: new Date(),
  });

  return (
    <SafeAreaView>
      <Container>
        <TextSTC size="48px" family="bold" gap="0 0 20px 0">
          Pocket
        </TextSTC>
        <TextSTC family="bold" gap="0 0 20px 0">
          Sign In
        </TextSTC>
        <Input
          value={user.first_name}
          placeholder="First Name"
          placeholderTextColor={Colors.black}
          onChangeText={(text) => setUser({ ...user, first_name: text })}
        />
        <Input
          value={user.last_name}
          placeholder="Last Name"
          placeholderTextColor={Colors.black}
          onChangeText={(text) => setUser({ ...user, last_name: text })}
        />
        <TextSTC
          gap="15px 0 0 0"
          family="semi"
          style={{ width: "75%", textAlign: "left" }}
        >
          Start Amount
        </TextSTC>
        <Input
          value={user.amount}
          placeholder="Amount"
          placeholderTextColor={Colors.black}
          keyboardType="number-pad"
          onChangeText={(text) =>
            setUser({ ...user, amount: parseFloat(text) })
          }
        />
        <ButtonNoBG
          onPress={() => {
            signIn(user);
          }}
        >
          <TextSTC family="semi" size="20px" gap="0 7px 0 0">
            Sign In
          </TextSTC>
          <Feather name="chevron-right" size={24} color={Colors.black} />
        </ButtonNoBG>
      </Container>
    </SafeAreaView>
  );
};

const mapDispatch = {
  signIn: (data: User) => ({
    type: SIGNIN,
    payload: data,
  }),
};
const connector = connect(null, mapDispatch);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SignInScreen);
