import { useFonts } from "expo-font";
import styles from "./Style/Styling.js";
import {View} from "react-native";
import { useEffect, useState } from "react";
import TopBox from "./component/TopBox.js";
import SecondBox from "./component/SecondBox.js"
import ThirdBox from "./component/ThirdBox.js";
import FourthBox from "./component/FourthBox.js";

export default function App() {
  var Money = 0;
  const [sidenav, setSidenav] = useState("none");
  const toggleSidebar = () => {
    setSidenav(sidenav === "none" ? "flex" : "none");
  };
  let [fontsLoaded] = useFonts({
    roboto: require("./assets/Roboto/Roboto-Regular.ttf"), // Ensure the path is correct
  });
  if (!fontsLoaded) {
  }

  return (
    <View style={styles.container}>
      <TopBox />
      <SecondBox />
      <ThirdBox />
      <FourthBox />
    </View>
  );
}
