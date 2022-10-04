import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionnaires } from "../components/FormScreenComponents/Question/Questions";
import { optionsArray } from "../utils/optionsArray";
import OptionButton from "../components/FormScreenComponents/OptionButton/OptionButton";

const FormScreen = () => {
  const questions = questionnaires.map((question) => question.text);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  let [options, setOptions] = useState(optionsArray(questionnaires, counter));

  const Next = () => {
    if (counter !== questions.length - 1) {
      setCounter((counter += 1));
      setQuestion(questions[counter]);
      setOptions(optionsArray(questionnaires, counter));
      console.log(counter);
    }
  };

  const renderOptions = options.map((option) => (
    <OptionButton onPress={Next} option={option.text} />
  ));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.question}>
          <Question question={question} />
        </View>
        {renderOptions}
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Prev</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 30,
  },
  bottom: {
    justifyContent: "flex-end",
    flex: 1
  },
  btn: {
    backgroundColor: "#1A759F",
    padding: 22,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: '600',
  },
  question: {
    marginVertical: 30,
  },
});
