import styled from "styled-components/native";
import { View, Text, Pressable } from "react-native";
import Logo from "../../components/Logo";
import VetCard from "../../components/VetCard";
import { Input } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Main } from "../../styles";

const InputComponent = styled(Input)`
  padding: 15px;
`;

const Index = ({ navigation }: any) => {
  return (
    <Main>
      <Logo />
      <InputComponent
        w={{
          base: "100%",
          md: "25%",
        }}
        type="text"
        InputRightElement={
          <Feather
            style={{ marginRight: 10 }}
            name="search"
            size={20}
            color="black"
          />
        }
        placeholder="Search"
      />
      <VetCard navigation={navigation} />
      <VetCard navigation={navigation} />
      <VetCard navigation={navigation} />
    </Main>
  );
};

export default Index;
