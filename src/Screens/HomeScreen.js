import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <TouchableOpacity
        onPress={() => {
          //Navigating to FormScreen and sending data to FormScreen
          navigation.push("Form");
        }}
      >
        <Text>Go to survey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
