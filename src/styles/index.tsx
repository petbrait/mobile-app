import styled from "styled-components/native";
import { Dimensions } from "react-native";
const HEIGHT = Dimensions.get("window").height;

export const Main = styled.View`
  position: relative;
  top: 30px;
  padding: 30px 20px;
  height: ${HEIGHT};
  background-color: #fff;
`;

export const Wrapper = styled.View`
  width: 100%;
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

interface boxProps {
  value: string;
}

export const Box = styled.View<boxProps>`
  width: ${({ value }) => value};
`;
