import { Text, View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

interface headerTitleProps {
  route?: any;
}

const Index = ({ route }: headerTitleProps) => {
  const getRouteName = () => {
    if (route) {
      const routeName = getFocusedRouteNameFromRoute(route);
      return routeName;
    }
  };
  return (
    <View style={{ marginBottom: 15 }}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default Index;
