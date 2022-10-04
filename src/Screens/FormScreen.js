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
    }
  };
  const Prev = () => {
      setCounter((counter -= 1));
      setQuestion(questions[counter]);
      setOptions(optionsArray(questionnaires, counter));
  };

  const renderOptions = options.map((option) => (
    <OptionButton onPress={Next} option={option.text} />
  ));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>Tenk på de siste 4 timene</Text>
        </View>
        <View style={styles.question}>
          <Question question={question} />
        </View>
        {renderOptions}
        <View style={styles.bottom}>
          {counter === 0 ? null : ( 
          <TouchableOpacity style={styles.btn} onPress={Prev}>
            <Text style={styles.textBtn}>Previous</Text>
          </TouchableOpacity>)
          } 
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  bottom: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#1A759F",
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
    width: 200,
  },
  container: {
    height: '100%',
    marginHorizontal: 20,
  },
  info: {
    marginTop: 20,
    fontSize: 18,
    opacity: 0.6
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: '500',
  },
  question: {
    marginTop: 10,
    marginBottom: 50
  },
});
