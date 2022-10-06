import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const FormComponent = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Form")}>
      <Text>Go to survey</Text>
    </TouchableOpacity>
  );
};

export default FormComponent;
