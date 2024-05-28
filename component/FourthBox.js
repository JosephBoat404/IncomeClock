import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../Style/Styling.js";

export default function FourthBox() {
  return (
    <View style={[styles.box_4]}>
      <Ionicons name="home-outline" size={32} color="black" />
      <Ionicons name="add-sharp" size={32} color="black" />
      <Ionicons name="person-outline" size={32} color="black" />
    </View>
  );
}
