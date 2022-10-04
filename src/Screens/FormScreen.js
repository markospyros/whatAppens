import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, DevSettings, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionnaires } from "../components/FormScreenComponents/Question/Questions";

const FormScreen = () => {
  const questions = questionnaires.map((question) => question.text);

  const answerOptions = questionnaires.map((option) => option.answerOptions);

  console.log(answerOptions[0].text);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  const onNext = () => {
    setCounter((counter += 1));
    setQuestion(questions[counter]);
    console.log(question);
  };

  return (
    <SafeAreaView>
      <Question question={question} />
    </SafeAreaView>
  );
};

export default FormScreen;
