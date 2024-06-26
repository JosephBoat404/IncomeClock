import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../Style/Styling.js";

export default function SecondBox() {
  const date = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  return (
    <View style={[styles.box_2, styles.shadowProp, styles.elevation]}>
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
      <View style={styles.Frontview}>
        <View style={styles.InsideFrontView}>
          <Text style={{fontSize:15,textAlign:"center",opacity:0.4}}>Expected Income</Text>
          <Text style={{fontSize:62,textAlign:"center",fontFamily: 'roboto'}}>$0</Text>
        </View>
        <View style={[styles.InsideFrontViewCal]}>
          <Text style={{fontSize:62,textAlign:"center",fontFamily: 'roboto'}}>{day}</Text>
          {/* <Text style={{fontSize:32,textAlign:"center",fontFamily: 'roboto', fontWeight:"bold"}}>{month}</Text> */}
        </View>
      </View>
    </View>
  );
}
