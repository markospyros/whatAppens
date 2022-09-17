import React, { useState } from "react";
import { TouchableOpacity, Text, View, Pressable } from "react-native";
import {
  radioButtonDot,
  radioButtonInnerDot,
  radioButtonInnerDotOnPress,
  radioButtonText,
  radioButtonView,
  radioButtonViewOnPress,
} from "./RadioButtonStyle";

const RadioButton = (props) => {
  return (
    <Pressable style={props.boxStyle} onPress={props.onPress} id={props.key}>
      <View style={radioButtonDot}>
        <View style={props.dotStyle}></View>
      </View>
      <Text style={radioButtonText}>{props.item.title}</Text>
    </Pressable>
  );
};

export default RadioButton;
