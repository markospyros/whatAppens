import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  DevSettings,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Question from "../components/FormScreenComponents/Question/Question";
import { questionnaires } from "../components/FormScreenComponents/Question/Questions";
import { optionsArray } from "../utils/optionsArray";
import OptionButton from "../components/FormScreenComponents/OptionButton/OptionButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FormScreen = ({ navigation, route }) => {
  const questions = questionnaires.map((question) => question.text);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  let [options, setOptions] = useState(optionsArray(questionnaires, counter));

  let [score, setScore] = useState(0);

  let [storage, setStorage] = useState();

  const lastQuestion = questions.length - 1;

  let { key } = route.params;

  const save = async () => {
    try {
      await AsyncStorage.setItem(key, score.toString());
    } catch (error) {
      alert(error);
    }
  };

  const Next = (answer) => {
    if (answer === "Ikke plaget") {
      setScore((score += 0));
    }

    if (answer === "Lite plaget") {
      setScore((score += 1));
    }

    if (answer === "Ganske mye") {
      setScore((score += 2));
    }

    if (answer === "Veldig mye") {
      setScore((score += 3));
    }

    if (counter !== lastQuestion) {
      setCounter((counter += 1));
      setQuestion(questions[counter]);
      setOptions(optionsArray(questionnaires, counter));
      console.log(counter);
      console.log(questions.length);
    } else {
      save();
      navigation.navigate("Tabs");
      DevSettings.reload();
    }
  };

  const Prev = () => {
    setCounter((counter -= 1));
    setQuestion(questions[counter]);
    setOptions(optionsArray(questionnaires, counter));
  };

  const renderOptions = options.map((option) => {
    return (
      <OptionButton
        key={option.answerOptionId}
        onPress={() => Next(option.text)}
        option={option.text}
      />
    );
  });

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
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#1A759F",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
    width: 150,
  },
  container: {
    height: "100%",
    marginHorizontal: 20,
  },
  info: {
    marginTop: 20,
    fontSize: 18,
    opacity: 0.6,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  question: {
    marginTop: 10,
    marginBottom: 50,
  },
});
