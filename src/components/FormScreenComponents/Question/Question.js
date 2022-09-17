import React from "react";
import { Text } from "react-native";
import { questionStyle } from "./QuestionStyle";

const Question = (props) => {
  return <Text style={questionStyle}>{props.question}</Text>;
};

export default Question;
