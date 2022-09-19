import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View } from "react-native";
import ForwardButton from "../components/FormScreenComponents/ForwardButton/ForwardButton";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";
import RadioButtonGroup from "../components/FormScreenComponents/RadioButton/RadioButtonGroup";
import { appContainer } from "../components/FormScreenComponents/style";
import { SafeAreaView } from "react-native-safe-area-context";
import ForwardButtonGroup from "../components/FormScreenComponents/ForwardButton/ForwardButtonGroup";

const FormScreen = ({ route, navigation }) => {
  // Fetching data from the HomeScreen
  let { id, counter, question, category } = route.params;

  const questions = questionaires.map((question) => question.question);

  const categories = questionaires.map((question) => question.category);

  const onNext = () => {
    // Increasing id variable by one so that we get next question everytime we move forward
    if (id !== questions.length) {
      id++;
      counter++;
      navigation.push("Form", {
        id: id,
        counter: counter,
        question: questions[counter],
        category: categories[counter],
      });
    } else {
      id === questions.length;
    }
  };

  const onPrevious = () => {
    id--;
    counter--;
    navigation.goBack();
  };

  console.log(`Counter is ${counter} and ID is ${id}`);

  const questionIndicator = `${id} av ${questions.length}`;

  return (
    <SafeAreaView style={appContainer}>
      <StatusBar />
      <Question question={question} />
      <RadioButtonGroup category={category} />
      <ForwardButtonGroup onPrevious={onPrevious} onNext={onNext} />
      <Text>{questionIndicator}</Text>
    </SafeAreaView>
  );
};

export default FormScreen;
