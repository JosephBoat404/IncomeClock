import React, { useContext, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import styles from "../Style/Styling.js";
import ScheduleEdit from "./ScheduleEdit.js";
import {SvgVisibilityContext} from "../component/TimeContext.js";

export default function ThirdBox() {
  const { svgVisible } = useContext(SvgVisibilityContext);
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

      {svgVisible &&( 
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Svg
            width="200"
            height="178"
            viewBox="0 0 270 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx="129.332" cy="121" r="121" fill="#D6DDE8" />
            <Rect
              x="37.3322"
              y="31"
              width="199"
              height="183"
              rx="20"
              fill="#989FAF"
            />
            <Rect
              x="22.3322"
              y="31"
              width="199"
              height="183"
              rx="20"
              fill="black"
            />
            <Path
              d="M22.3322 51C22.3322 39.9543 31.2865 31 42.3322 31H221.332V81H22.3322V51Z"
              fill="#989FAF"
            />
            <Rect
              x="85.3322"
              y="45"
              width="70"
              height="18"
              rx="9"
              fill="#F1F3F9"
            />
            <Path
              d="M35.3322 105C35.3322 98.9249 40.257 94 46.3322 94H220.332V188H46.3322C40.257 188 35.3322 183.075 35.3322 177V105Z"
              fill="black"
            />
            <Circle cx="181.332" cy="54" r="9" fill="#F1F3F9" />
            <Circle cx="59.3322" cy="54" r="9" fill="#F1F3F9" />
            <Circle cx="40.8322" cy="192.5" r="35.5" fill="black" />
            <Path
              d="M181.346 165.306C177.863 170.283 171.005 171.496 166.027 168.013C161.049 164.531 164.832 157 164.332 151.5C163.782 145.45 169.854 149.212 174.832 152.694C179.81 156.177 184.828 160.328 181.346 165.306Z"
              fill="#989FAF"
            />
            <Path
              d="M265.465 219.579C261.982 224.557 255.124 225.769 250.146 222.286C245.168 218.804 248.951 211.273 248.451 205.773C247.901 199.723 253.973 203.485 258.951 206.968C263.929 210.45 268.947 214.601 265.465 219.579Z"
              fill="#989FAF"
              fillOpacity="0.5"
            />
            <Path
              d="M232.365 17.2349C230.138 20.4189 225.374 20.9309 221.726 18.3785C218.077 15.826 221.748 13.3733 221.156 9.6648C220.505 5.58536 228.112 5.42892 231.76 7.98133C235.409 10.5337 234.593 14.0509 232.365 17.2349Z"
              fill="#989FAF"
              fillOpacity="0.5"
            />
            <Path
              d="M21.0509 17.1037C18.8235 20.2877 14.0601 20.7997 10.4116 18.2473C6.76308 15.6948 10.434 13.2421 9.84177 9.5336C9.19031 5.45417 16.7973 5.29773 20.4458 7.85014C24.0943 10.4025 23.2784 13.9197 21.0509 17.1037Z"
              fill="#989FAF"
              fillOpacity="0.5"
            />
            <Path
              d="M13.4175 41.7208C12.4611 43.088 8.72798 42.1272 5.07947 39.5748C1.43095 37.0224 3.75621 36.4931 2.28113 34.0467C0.65849 31.3555 6.79728 33.2977 10.4458 35.8501C14.0943 38.4025 14.374 40.3536 13.4175 41.7208Z"
              fill="#989FAF"
              fillOpacity="0.5"
            />
            <Path
              d="M248.798 244.193C247.386 246.211 244.198 246.418 241.678 244.655C239.158 242.891 240.591 239.768 240.094 237.332C239.547 234.652 242.598 236.59 245.119 238.353C247.639 240.116 250.21 242.174 248.798 244.193Z"
              fill="#989FAF"
              fillOpacity="0.5"
            />
            <Rect
              x="27.1223"
              y="171.859"
              width="46.8346"
              height="10.3345"
              rx="5.16725"
              transform="rotate(45 27.1223 171.859)"
              fill="#F1F3F9"
            />
            <Rect
              x="19.8147"
              y="204.976"
              width="46.8346"
              height="10.3345"
              rx="5.16725"
              transform="rotate(-45 19.8147 204.976)"
              fill="#F1F3F9"
            />
            <Rect
              x="78.8435"
              y="117"
              width="20.4523"
              height="6.73347"
              rx="3.36674"
              transform="rotate(31.4319 78.8435 117)"
              fill="#989FAF"
            />
            <Rect
              x="95.8646"
              y="130.465"
              width="20.4523"
              height="6.73347"
              rx="3.36674"
              transform="rotate(144.25 95.8646 130.465)"
              fill="#989FAF"
            />
            <Rect
              x="159.783"
              y="142.411"
              width="20.4523"
              height="6.73347"
              rx="3.36674"
              transform="rotate(-148.568 159.783 142.411)"
              fill="#989FAF"
            />
            <Rect
              x="142.332"
              y="128.949"
              width="20.4523"
              height="6.73347"
              rx="3.36674"
              transform="rotate(-35.7504 142.332 128.949)"
              fill="#989FAF"
            />
            <Path
              d="M139.332 166.489C139.332 172.56 129.979 171.985 119.098 171.985C108.218 171.985 98.3322 172.56 98.3322 166.489C98.3322 160.418 108.218 150 119.098 150C129.979 150 139.332 160.418 139.332 166.489Z"
              fill="#989FAF"
            />
            <Path
              d="M129.332 166.748C129.332 168.127 124.77 167.997 119.462 167.997C114.154 167.997 109.332 168.127 109.332 166.748C109.332 165.368 114.154 163 119.462 163C124.77 163 129.332 165.368 129.332 166.748Z"
              fill="#F1F3F9"
            />
          </Svg>
        </View>)}

      <ScrollView>
        <ScheduleEdit />
      </ScrollView>
    </View>
  );
}
