import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Main } from "../../styles";
import Button from "../../components/Button";

const ContentMain = styled.View`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  margin-top: 10px;
  font-size: 18px;
`;

const Race = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #777777;
`;

interface profileProps {
  navigation: any;
}

const Index = ({ navigation }: profileProps) => {
  return (
    <Main>
      <ContentMain>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 80,
          }}
          source={{
            uri: "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
          }}
        />
        <Name>Tiburonsin</Name>
        <Race>Albino Criollo</Race>
        <View style={{ marginTop: 30 }}>
          <Button navigation={navigation} view="Main" action="action">
            Contratar seguro
          </Button>
        </View>
      </ContentMain>
    </Main>
  );
};

export default Index;
