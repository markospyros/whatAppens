import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { forwardButtonText, forwardButtonView } from "./ForwardButtonStyle";

const NextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.function} style={forwardButtonView}>
      <Text style={forwardButtonText}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
