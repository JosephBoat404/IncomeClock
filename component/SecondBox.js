import { Text, View, Image } from "react-native";
import styles from "../Style/Styling.js";
import { LinearGradient } from "expo-linear-gradient";

export default function SecondBox() {
  var date = new Date().getDate();
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, justifyContent: "center", paddingTop: 10 }}>
          <Text style={[styles.text2, { fontSize: 20, fontFamily: "roboto" }]}>
            Expected Money
          </Text>
          <Text
            style={[
              styles.text2,
              {
                opacity: 1,
                lineHeight: 65,
                fontWeight: "400",
                fontSize: 45,
                fontFamily: "roboto",
              },
            ]}
          >
            $0
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <View style={{ position: "relative", width: 150, height: 150 }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/calendar-svgrepo-com.png")}
            />
            <Text style={[styles.datedisplay]}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
