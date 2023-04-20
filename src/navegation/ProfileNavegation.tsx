import Profile from "../screens/profile";
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
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Index;
