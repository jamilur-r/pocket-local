import styled from "styled-components/native";
import { Colors } from "./Colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #dae8fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface TypeSTCProps {
  size?: string;
  family?: string;
  gap?: string;
  color?: string;
}

export const TextSTC = styled.Text<TypeSTCProps>`
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: ${(props) => (props.family ? props.family : "norm")};
  margin: ${(props) => (props.gap ? props.gap : "0")};
  color: ${(props) => (props.color ? props.color : Colors.black)};
`;

export const ButtonNoBG = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  color: ${Colors.black};
  padding: 15px 20px;
  font-family: "semi";
  margin-top: 15px;
  background-color: #fff;
  width: 75%;
`;

export const HomeContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.blueWhite};
`;

export const InfoWrapper = styled.View`
  width: 85%;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  width: 150px;
  height: 130px;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
`;
