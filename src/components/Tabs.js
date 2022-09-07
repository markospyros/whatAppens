import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { FormScreen } from "../Screens/FormScreen";
import { GraphScreen } from "../Screens/GraphScreen";
import { SymptonScreen } from "../Screens/SymptonScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Skjema"
      screenOptions={{ tabBarActiveTintColor: "#e91e63" }}
    >
      <Tab.Screen
        name="Skjema"
        component={FormScreen}
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
        component={FormScreen}
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
