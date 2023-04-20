import styled from "styled-components/native";
import { StyleSheet, View, Image } from "react-native";
import { Wrapper, Container, Box } from "../../styles";

const Main = styled.View`
  position: relative;
  margin: 30px 20px 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

const Name = styled.Text`
  font-size: 12px;
`;

const Description = styled.Text`
  font-size: 8px;
`;

const Index = () => {
  return (
    <View>
      <View style={styles.shadow}>
        <Main>
          <Wrapper>
            <Container>
              <Box value="35%">
                <Image
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  source={{
                    uri: "https://www.zarla.com/images/zarla-carevet-1x1-2400x2400-20210809-ctbb9btmp84tpccp4hdr.png?crop=1:1,smart&width=250&dpr=2",
                  }}
                />
              </Box>
              <Box value="65%">
                <Name>Hospital veterinario San Jacinto</Name>
                <Description>
                  Especialidades veterinarias con médicos de gran experiencia
                </Description>
              </Box>
            </Container>
          </Wrapper>
        </Main>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
