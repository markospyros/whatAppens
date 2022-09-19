import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import FormScreen from "../../Screens/FormScreen";
import { Tabs } from "../Tabs";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
