import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import RadioButton from "./RadioButton";
import {
  radioButtonGroupContainer,
  radioButtonInnerDot,
  radioButtonInnerDotOnPress,
  radioButtonView,
  radioButtonViewOnPress,
} from "./RadioButtonStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Selector } from "react-native-flatlist-selector";

const RadioButtonGroup = (props) => {
  const responseOptions = [
    { id: 1, value: 0, title: "Ikke plaget" },
    { id: 2, value: 1, title: "Lite plaget" },
    { id: 3, value: 2, title: "Ganske mye" },
    { id: 4, value: 3, title: "Veldig mye" },
  ];

  let STORAGE_KEY = "selectedId";

  const [selectedId, setSelectedId] = useState(0);

  const renderRadioButton = ({ item }) => {
    const boxStyle =
      item.id === selectedId ? radioButtonViewOnPress : radioButtonView;

    const dotStyle =
      item.id === selectedId ? radioButtonInnerDotOnPress : radioButtonInnerDot;

    const press = () => {
      setSelectedId(item.id);
    };

    return (
      <RadioButton
        item={item}
        onPress={press}
        boxStyle={boxStyle}
        dotStyle={dotStyle}
      />
    );
  };

  const getIndex = (selectedId) => {
    setSelectedId({ selectedId: selectedId });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={responseOptions}
        renderItem={renderRadioButton}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        scrollEnabled={false}
        style={radioButtonGroupContainer}
      />
      <Selector
        data={responseOptions}
        selectedIndex={getIndex}
        renderItem={renderRadioButton}
      />
    </SafeAreaView>
  );
};

export default RadioButtonGroup;
