import React from "react";
import { Text, StyleSheet } from "react-native";

const Question = (props) => {
  return <Text style={styles.question}>{props.question}</Text>;
};

export default Question;

const styles = StyleSheet.create({
  question: {
    fontSize: 22,
  },
});
