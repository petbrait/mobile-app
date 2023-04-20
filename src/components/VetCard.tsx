import styled from "styled-components/native";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Wrapper, Container, Box } from "../styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "../constants/colors";

const Card = styled.View`
  position: relative;
  margin: 10px 0;
  padding: 20px 0 20px 20px;
  background-color: #fff;
  border-radius: 10px;
`;

const Name = styled.Text``;

const Button = styled.Text``;

const Index = ({ navigation }: any) => {
  return (
    <Pressable onPress={() => navigation.navigate("Vet")}>
      <View style={styles.shadow}>
        <Card>
          <Wrapper>
            <Container>
              <Box value="25%">
                <Image
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  source={{
                    uri: "https://www.zarla.com/images/zarla-carevet-1x1-2400x2400-20210809-ctbb9btmp84tpccp4hdr.png?crop=1:1,smart&width=250&dpr=2",
                  }}
                />
              </Box>
              <Box value="75%">
                <Wrapper>
                  <Container>
                    <Box value="82%">
                      <Name>Hospital veterinario San Jacinto</Name>
                      <Button>Detalles</Button>
                    </Box>
                    <Box value="15%">
                      <Feather
                        style={{ marginRight: 10 }}
                        name="heart"
                        size={17}
                        color={colors.brightBlue}
                      />
                    </Box>
                  </Container>
                </Wrapper>
              </Box>
            </Container>
          </Wrapper>
        </Card>
      </View>
    </Pressable>
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
