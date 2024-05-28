import { Text, View } from "react-native";
import styles from "../Style/Styling.js";

export default function InputFields() {
  return (
    <View style={[styles.box_1]}>
      <Text style={[styles.text, { fontFamily: "roboto" }]}>
        Hello, Joseph!
      </Text>
    </View>
  );
}
