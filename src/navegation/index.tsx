import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/onboarding/Welcome";
import MainNavegation from "../navegation/MainNavegation";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Main" component={MainNavegation} />
    </Stack.Navigator>
  );
};

export default Index;
