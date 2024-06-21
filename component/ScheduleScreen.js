import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import styles from "../Style/Styling.js";
import { Ionicons } from "@expo/vector-icons";
import {SvgVisibilityContext, TimeContext } from "../component/TimeContext.js";
import SpaceBetweenTab from "./SpaceBetweenTab.js";

export default function ScheduleScreen() {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [am_pm, setAmPm] = useState("AM");

  const { addSchedule } = useContext(TimeContext);
  const {toggleSvgVisibility } = useContext(SvgVisibilityContext);

  const incrementHour = () => {
    setHour((prevHour) => (prevHour % 12) + 1);
  };

  const decrementHour = () => {
    setHour((prevHour) => (prevHour === 1 ? 12 : prevHour - 1));
  };

  const incrementMinute = () => {
    setMinute((prevMinute) => (prevMinute + 1) % 60);
  };

  const decrementMinute = () => {
    setMinute((prevMinute) => (prevMinute === 0 ? 59 : prevMinute - 1));
  };

  const toggleAmPm = () => {
    setAmPm((prevAmPm) => (prevAmPm === "AM" ? "PM" : "AM"));
  };

  const handleSave = () => {
    addSchedule({ hour, minute, am_pm });
  };

  return (
    <View style={styles.Schbox1}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", marginHorizontal: 10 }}>
          <TouchableOpacity onPress={incrementHour}>
            <Ionicons name="caret-up" size={28}></Ionicons>
          </TouchableOpacity>
          <Text style={{ fontSize: 60, textAlign: "center" }}>{hour}</Text>
          <TouchableOpacity onPress={decrementHour}>
            <Ionicons name="caret-down" size={28}></Ionicons>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 60, textAlign: "center" }}>:</Text>

        <View style={{ alignItems: "center", marginHorizontal: 10 }}>
          <TouchableOpacity onPress={incrementMinute}>
            <Ionicons name="caret-up" size={28}></Ionicons>
          </TouchableOpacity>
          <Text style={{ fontSize: 60, textAlign: "center" }}>
            {String(minute).padStart(2, "0")}
          </Text>
          <TouchableOpacity onPress={decrementMinute}>
            <Ionicons name="caret-down" size={28}></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", marginHorizontal: 10 }}>
          <TouchableOpacity onPress={toggleAmPm}>
            <Text style={{ fontSize: 40, textAlign: "center", lineHeight: 75 }}>
              {am_pm}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleSave} style={{borderWidth:1,width:"90%",height:"14%",justifyContent:"center",alignItems:"center",margin:20}}>
        <Text style={{fontSize:30, textAlign:"center"}}>Save</Text>
      </TouchableOpacity>

      <View style={styles.Schbox2}>
        <View style={{borderWidth:1, width:"98%"}}><Text>1</Text></View>
        <View style={{borderWidth:1, width:"98%"}}><Text>1</Text></View>
        <View style={{borderWidth:1, width:"98%"}}><Text>1</Text></View>
      </View>
      <SpaceBetweenTab />
    </View>
  );
}
