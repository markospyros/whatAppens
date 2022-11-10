import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const OptionButton = (props) => {
  return (
    <TouchableOpacity style={styles.optionButton} onPress={props.onPress}>
      <Text style={styles.optionText}>{props.option}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  optionButton: {
    paddingVertical: 12,
    marginVertical: 8,
    backgroundColor: "#90cdf4",
    paddingHorizontal: 12,
    borderRadius: 8,
    padding: 24,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    marginLeft: 10,
    marginVertical: 8,
  },
});
