import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";

const HomeScreen = ({ navigation }) => {
  const questions = questionaires.map((question) => question.question);

  const categories = questionaires.map((question) => question.category);

  let counter = 0;

  return (
    <SafeAreaView>
      <StatusBar />
      <TouchableOpacity
        onPress={() => {
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
