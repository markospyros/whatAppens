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
import { optionsArray } from "../utils/optionsArray";
import OptionButton from "../components/FormScreenComponents/OptionButton/OptionButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { addPointsIntoCategories } from "../utils/addPointsIntoCategories";

const FormScreen = ({ navigation, route }) => {
  let {
    generalQuestionnaires,
    questionnaire,
    pointsArray,
    localObjectsArray,
    finalAnswersArray,
  } = route.params;

  const questions = questionnaire.map((question) => question.text);

  const questionsId = questionnaire.map((question) => question.questionId);

  const varNames = questionnaire.map((question) => question.externalQuestionId);

  let [counter, setCounter] = useState(0);

  let [question, setQuestion] = useState(questions[counter]);

  let [options, setOptions] = useState(optionsArray(questionnaire, counter));

  let [score, setScore] = useState(0);

  //Category points
  let depPoints = 0;
  let angPoints = 0;

  let [storage, setStorage] = useState();

  const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

  const lastQuestion = questions.length - 1;

  // const save = async () => {
  //   try {
  //     await AsyncStorage.setItem(key, score.toString());
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const sendData = () => {
    const postData = { metadata: {}, answers: finalAnswersArray };

    fetch("https://nettskjema.no/api/v3/private/deliver/form/285961", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const Next = (answer, questionID, answerID, varName) => {
    if (answer === "Not Affected") {
      setScore((score += 0));
      pointsArray.push(0);

      localObject = {
        questionId: questionID,
        id: answerID,
        varName: varName,
        date: date,
        points: 0,
      };

      object = {
        type: "SINGLE_OPTION",
        questionId: questionID,
        id: answerID,
      };

      localObjectsArray.push(localObject);
      finalAnswersArray.push(object);
    }

    if (answer === "Little Affected") {
      setScore((score += 1));
      pointsArray.push(1);

      localObject = {
        questionId: questionID,
        id: answerID,
        varName: varName,
        date: date,
        points: 1,
      };

      object = {
        type: "SINGLE_OPTION",
        questionId: questionID,
        id: answerID,
      };

      localObjectsArray.push(localObject);
      finalAnswersArray.push(object);
    }

    if (answer === "Quite Affected") {
      setScore((score += 2));
      pointsArray.push(2);

      localObject = {
        questionId: questionID,
        id: answerID,
        varName: varName,
        date: date,
        points: 2,
      };

      object = {
        type: "SINGLE_OPTION",
        questionId: questionID,
        id: answerID,
      };

      localObjectsArray.push(localObject);
      finalAnswersArray.push(object);
    }

    if (answer === "Very Affected") {
      setScore((score += 3));
      pointsArray.push(3);

      localObject = {
        questionId: questionID,
        id: answerID,
        varName: varName,
        date: date,
        points: 3,
      };

      object = {
        type: "SINGLE_OPTION",
        questionId: questionID,
        id: answerID,
      };

      localObjectsArray.push(localObject);
      finalAnswersArray.push(object);
    }

    if (counter !== lastQuestion) {
      setCounter((counter += 1));
      setQuestion(questions[counter]);
      setOptions(optionsArray(questionnaire, counter));
    } else {
      if (finalAnswersArray.length === generalQuestionnaires.length) {
        depPoints = addPointsIntoCategories(localObjectsArray, "Depr");
        angPoints = addPointsIntoCategories(localObjectsArray, "Angst");
        console.log("depPoints:" + depPoints);
        console.log("angPoints:" + angPoints);
        sendData();
      }
      navigation.goBack();
    }
  };

  const Prev = () => {
    setCounter((counter -= 1));
    setQuestion(questions[counter]);
    setOptions(optionsArray(questionnaire, counter));
    finalAnswersArray.splice(finalAnswersArray.length - 1, 1);
  };

  const renderOptions = options.map((option) => {
    return (
      <OptionButton
        key={option.answerOptionId}
        onPress={() =>
          Next(
            option.text,
            questionsId[counter],
            option.answerOptionId,
            varNames[counter]
          )
        }
        option={option.text}
      />
    );
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.info}>Tenk på de siste 24 timene</Text>
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
        <Text style={styles.questionCounter}>
          <Text style={styles.currentQuestion}>{counter + 1}</Text>
          <Text style={styles.lastQuestion}> / {questions.length} </Text>
        </Text>
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
    marginBottom: 5,
    width: 150,
  },
  currentQuestion: {
    fontSize: 20,
    fontWeight: "500",
    opacity: 1,
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
  lastQuestion: {
    fontSize: 16,
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
  questionCounter: {
    marginBottom: 10,
    textAlign: "center",
  },
  answerContainerStyle: { flexDirection: "row", padding: 10 },
  answerStyle: {
    fontWeight: "600",
    fontSize: 17,
    color: "#197CA5",
  },
});
