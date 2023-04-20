import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

interface headerLeftProps {
  route?: any;
  navigation: any;
}

const Index = ({ route, navigation }: headerLeftProps) => {
  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={{ paddingLeft: 30 }}>
      <TouchableOpacity
        onPress={() => {
          back();
        }}
      >
        <Feather
          style={{ marginRight: 10 }}
          name="chevron-left"
          size={26}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Index;
