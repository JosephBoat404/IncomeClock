import { Text, View, ScrollView } from "react-native";
import styles from "../Style/Styling.js";

export default function ScheduleEdit() {
  return (
    <ScrollView>
      <View style={styles.clockbox}>
        <Text style={[styles.text, { fontFamily: "roboto",fontSize: 26}]}>00:00</Text>
        <Text style={[styles.text, { fontSize: 14, fontFamily: "roboto", opacity:0.4,letterSpacing:2 }]}>
          SMTWTF
        </Text>
      </View>
    </ScrollView>
  );
}
