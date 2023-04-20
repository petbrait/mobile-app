import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderTitle from "./src/components/HeaderTitle";
import Headerleft from "./src/components/HeaderLeft";
import Welcome from "./src/screens/onboarding/Welcome";
import Dashboard from "./src/screens/home";
import Vet from "./src/screens/vet";
import { NativeBaseProvider } from "native-base";
import Navegation from "./src/navegation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navegation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
