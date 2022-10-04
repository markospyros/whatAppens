import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, DevSettings } from "react-native";
import ForwardButton from "../components/FormScreenComponents/ForwardButton/ForwardButton";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";
import RadioButtonGroup from "../components/FormScreenComponents/RadioButton/RadioButtonGroup";
import { appContainer } from "../components/FormScreenComponents/style";
import { SafeAreaView } from "react-native-safe-area-context";
import ForwardButtonGroup from "../components/FormScreenComponents/ForwardButton/ForwardButtonGroup";

const FormScreen = ({ route, navigation }) => {
  const questions = questionaires.map((question) => question.question);

  const categories = questionaires.map((question) => question.category);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  let [category, setCategory] = useState(categories[counter]);

  let [selectedId, setSelectedId] = useState();

  const onNext = () => {
    if (counter < questions.length - 1) {
      setCounter((counter += 1));
      setQuestion(questions[counter]);
      setCategory(categories[counter]);
    }
  };

  return (
    <SafeAreaView style={appContainer}>
      <StatusBar />
      <Question question={question} />
      <RadioButtonGroup category={category} selectedId={selectedId} />
      <ForwardButtonGroup
        onNext={onNext}
        counter={counter}
        limit={questions.length - 1}
      />
    </SafeAreaView>
  );
};

export default FormScreen;
