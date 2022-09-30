import React from "react";
import { View } from "react-native";
import ForwardButton from "./ForwardButton";
import { forwardButtonGroupView } from "./ForwardButtonStyle";

const ForwardButtonGroup = (props) => {
  const onNext = props.onNext;
  const counter = props.counter;
  const limit = props.limit;

  return (
    <View style={forwardButtonGroupView}>
      {counter < limit ? (
        <ForwardButton function={onNext} title="Next" />
      ) : null}
    </View>
  );
};

export default ForwardButtonGroup;
