import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

const NextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.function}>
      <Text>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
