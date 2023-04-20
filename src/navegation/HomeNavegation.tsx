import Home from "../screens/home/Home";
import Vet from "../screens/vet";
import HeaderTitle from "../components/HeaderTitle";
import Headerleft from "../components/HeaderLeft";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTintColor: "#000",
        headerStyle: {
          elevation: 0,
          backgroundColor: "#fff",
        },
        headerTitle: () => <HeaderTitle route={route} />,
        headerLeft: () => <Headerleft route={route} navigation={navigation} />,
        cardStyle: { backgroundColor: "#fff" },
      })}
    >
      <Stack.Screen
        name="Dashboard"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Vet" component={Vet} />
    </Stack.Navigator>
  );
};

export default Index;
