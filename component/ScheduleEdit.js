import { Text, View, ScrollView } from "react-native";
import styles from "../Style/Styling.js";

export default function ScheduleEdit() {
  return (
    <ScrollView>
      <View style={styles.clockbox}>
        <Text style={[styles.text, { fontFamily: "roboto" }]}>00:00</Text>
        <Text style={[styles.text, { fontSize: 15, fontFamily: "roboto" }]}>
          S M T W T F
        </Text>
      </View>
    </ScrollView>
  );
}
