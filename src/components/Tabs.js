import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import GraphScreen from "../Screens/GraphScreen";
import { SymptonScreen } from "../Screens/SymptonScreen";
import TipsScreen from "../Screens/TipsScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Skjema"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#2f89ae",
          paddingTop: 25,
          position: "absolute",
          bottom: 50,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        },
      }}
    >
      <Tab.Screen
        name="Skjema"
        component={HomeScreen}
        options={{
          tabBarLabel: "Skjema",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Grafer"
        component={GraphScreen}
        options={{
          tabBarLabel: "Grafer",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bar-graph" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Symptom"
        component={SymptonScreen}
        options={{
          tabBarLabel: "Symptom-nettverk",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="git-network-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          tabBarLabel: "Tips & Triks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
