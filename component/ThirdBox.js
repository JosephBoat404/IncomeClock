import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Style/Styling.js";
import ScheduleEdit from "./ScheduleEdit.js";

export default function ThirdBox() {
  return (
    <View style={[styles.box_3, styles.shadowProp, styles.elevation]}>
      <LinearGradient
        colors={[
          "rgba(97,106,230,1)",
          "rgba(226,105,229,1)",
          "rgba(237,163,58,1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.32, 0.86, 1]}
        style={styles.gradientBorder}
      />

      <Text style={[styles.ScheduleEditText]}>Schedule Total hours: 40</Text>
      <ScheduleEdit />
    </View>
  );
}
