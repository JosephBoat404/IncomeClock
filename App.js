import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./component/HomeScreen.js";
import ScheduleScreen from "./component/ScheduleScreen.js";
import ProfileScreen from "./component/ProfileScreen.js";
import { useFonts } from "expo-font";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto: require("./assets/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <Text
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      ></Text>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "planet-outline";
                size = 32;
              } else if (route.name === "Schedule") {
                iconName = "add-circle-outline";
                size = 32;
              } else if (route.name === "Profile") {
                iconName = "people-circle-outline";
                size = 32;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              borderColor: "#D1D0D0",
              backgroundColor: "white",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderWidth: 1,
              borderBottomWidth: 0,
              position: "absolute",
              overflow: "hidden",
              height: 60,
            },
            tabBarActiveTintColor: "#5849FF",
            tabBarInactiveTintColor: "black",
            headerStyle: {
              height: 100,
            },
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: "roboto",
            },

            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert("Notifications")}
                style={{ paddingRight: 20 }}
              >
                <Ionicons
                  name="notifications-circle-outline"
                  size={32}
                  color="black"
                />
              </TouchableOpacity>
            ),
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: "Hello Joseph!",
            }}
          />
          <Tab.Screen name="Schedule" component={ScheduleScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
