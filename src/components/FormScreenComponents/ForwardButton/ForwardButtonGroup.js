import React from "react";
import { View } from "react-native";
import ForwardButton from "./ForwardButton";
import { forwardButtonGroupView } from "./ForwardButtonStyle";

const ForwardButtonGroup = (props) => {
  return (
    <View style={forwardButtonGroupView}>
      <ForwardButton function={props.onNext} title="Next" />
    </View>
  );
};

export default ForwardButtonGroup;
