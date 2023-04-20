import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import HomeNavegation from "../navegation/HomeNavegation";
import ProfileNavegation from "../navegation/ProfileNavegation";
import Favorites from "../screens/favorites";

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 9,
          borderRadius: 25,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        //@ts-ignore.
        component={HomeNavegation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="home"
              size={26}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        //@ts-ignore.
        component={Favorites}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="heart"
              size={26}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavegation"
        component={ProfileNavegation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather
              style={{ marginRight: 10 }}
              name="user"
              size={26}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
