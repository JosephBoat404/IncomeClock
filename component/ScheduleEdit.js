import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../Style/Styling.js";
import { TimeContext } from "../component/TimeContext.js";

const ScheduleItem = ({ schedule }) => {
  return (
    <View style={styles.clockbox}>
      <Text style={[styles.text, { fontFamily: "roboto", fontSize: 26 }]}>
        {`${schedule.hour}:${String(schedule.minute).padStart(2, "0")} ${schedule.am_pm}`}
      </Text>
      <Text style={[styles.text, { fontSize: 14, fontFamily: "roboto", opacity: 0.4, letterSpacing: 2 }]}>
        SMTWTF
      </Text>
    </View>
  );
};

export default function ScheduleEdit() {
  const { schedules } = useContext(TimeContext);

  return (
    <ScrollView>
      {schedules.map((schedule, index) => (
        <ScheduleItem key={index} schedule={schedule} />
      ))}
    </ScrollView>
  );
}
