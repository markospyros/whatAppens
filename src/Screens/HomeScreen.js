import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";

const HomeScreen = ({ navigation }) => {
  // Creating an array from questionaires which contains the question attributes from every object
  const questions = questionaires.map((question) => question.question);

  // Creating an array from questionaires which contains the category attributes from every object
  const categories = questionaires.map((question) => question.category);

  // Creating a counter variable which allow us to move to previous and next question
  let counter = 0;

  return (
    <SafeAreaView>
      <StatusBar />
      <TouchableOpacity
        onPress={() => {
          //Navigating to FormScreen and sending data to FormScreen
          navigation.push("Form", {
            id: 1,
            counter,
            question: questions[counter],
            category: categories[counter],
          });
        }}
      >
        <Text>Go to survey</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
