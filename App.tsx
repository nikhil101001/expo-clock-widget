import { useColorScheme, View } from "react-native";
import Widget from "./components/Widget";
import "./global.css";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        elevation: 5,
        width: 200,
        margin: "auto",
        overflow: "hidden",
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: colorScheme === "dark" ? "#000000" : "#ffffff",
        borderColor: colorScheme === "dark" ? "#ffffff20" : "#00000020",
      }}
    >
      <Widget />
    </View>
  );
}
