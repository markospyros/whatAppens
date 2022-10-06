import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <FormComponent navigation={navigation} />
      <FormComponent navigation={navigation} />
      <FormComponent navigation={navigation} />
      <FormComponent navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
