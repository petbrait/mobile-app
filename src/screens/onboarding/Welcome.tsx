import styled from "styled-components/native";
import Button from "../../components/Button";

const StyledView = styled.View`
  padding: 70px 30px;
`;

const Logo = styled.Text`
  margin-top: 120px;
  margin-bottom: 120px;
  letter-spacing: 7px;
  text-align: center;
  font-size: 20px;
`;

const Index = ({ navigation }: any) => {
  return (
    <StyledView>
      <Logo>PETBRAIT</Logo>
      <Button navigation={navigation} view="Main" action="action-full">
        empezar
      </Button>
    </StyledView>
  );
};

export default Index;
