import { Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Style/Styling.js";
import ScheduleEdit from "./ScheduleEdit.js";

export default function ThirdBox({ scheduleEdits }) {
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
      <View
        style={{
          borderBottomWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
          paddingTop: 15,
          borderColor: "#D1D0D0",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "grey",
              marginRight: 5,
            }}
          />
          <Text style={{ fontSize: 15, textAlign: "center" }}>Schedule</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "grey",
              marginRight: 5,
            }}
          />
          <Text style={{ fontSize: 15, textAlign: "center" }}>Conflict</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "grey",
              marginRight: 5,
            }}
          />
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            Total Hours: 40
          </Text>
        </View>
      </View>

      <ScrollView>
        <ScheduleEdit />
        <ScheduleEdit />
        <ScheduleEdit />
        <ScheduleEdit />
        <ScheduleEdit />
        <ScheduleEdit />
      </ScrollView>
    </View>
  );
}
