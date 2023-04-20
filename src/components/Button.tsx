import { StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../constants/colors";
import { Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;

interface buttonProps {
  navigation: any;
  view: string;
  children: string;
  action: string; // Change the text-transform property
}

const Index = ({ navigation, view, children, action }: buttonProps) => {
  return (
    <Pressable onPress={() => navigation.navigate(view)} style={styles.button}>
      <Text
        style={[
          {
            textTransform: action === "action" ? "none" : "uppercase",
            letterSpacing: action === "action" ? 0 : 3,
          },
          styles.text,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Index;

const styles = StyleSheet.create({
  button: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 3,
    backgroundColor: `${colors.opacityBlue}`,
    shadowColor: "rgba(70, 73, 255, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 31,
  },
  text: {
    fontSize: 13.5,
    color: `${colors.brightBlue}`,
  },
});
