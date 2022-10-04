import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionnaires } from "../components/FormScreenComponents/Question/Questions";
import { optionsArray } from "../utils/optionsArray";

const FormScreen = () => {
  const questions = questionnaires.map((question) => question.text);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  let [options, setOptions] = useState(optionsArray(questionnaires, counter));

  const onNext = () => {
    setCounter((counter += 1));
    setQuestion(questions[counter]);
    setOptions(optionsArray(questionnaires, counter));
    console.log(options);
  };

  const renderOptions = options.map((option) => (
    <TouchableOpacity>
      <Text>{option}</Text>
    </TouchableOpacity>
  ));

  return (
    <SafeAreaView>
      <Question question={question} />
      <TouchableOpacity onPress={onNext}>
        <Text>Next</Text>
      </TouchableOpacity>
      {renderOptions}
    </SafeAreaView>
  );
};

export default FormScreen;
