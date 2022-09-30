import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import RadioButton from "./RadioButton";
import {
  radioButtonGroupContainer,
  radioButtonInnerDot,
  radioButtonInnerDotOnPress,
  radioButtonView,
  radioButtonViewOnPress,
} from "./RadioButtonStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RadioButtonGroup = (props) => {
  const responseOptions = [
    { id: 1, value: 0, title: "Ikke plaget" },
    { id: 2, value: 1, title: "Lite plaget" },
    { id: 3, value: 2, title: "Ganske mye" },
    { id: 4, value: 3, title: "Veldig mye" },
  ];

  let STORAGE_KEY = "selectedId";

  const [selectedId, setSelectedId] = useState(0);

  const save = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value.toString());
    } catch (error) {
      console.log("Failed!");
    }
  };

  const load = async () => {
    try {
      let selectedId = await AsyncStorage.getItem(STORAGE_KEY);

      if (selectedId !== null) {
        setSelectedId(selectedId);
      }
    } catch (error) {
      alert("Failed to show on cl");
    }
  };

  console.log(load());

  const renderRadioButton = ({ item }) => {
    const boxStyle =
      item.id === selectedId ? radioButtonViewOnPress : radioButtonView;

    const dotStyle =
      item.id === selectedId ? radioButtonInnerDotOnPress : radioButtonInnerDot;

    const press = () => {
      setSelectedId(item.id);
      save(item.value);
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

  return (
    <FlatList
      data={responseOptions}
      renderItem={renderRadioButton}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      scrollEnabled={false}
      style={radioButtonGroupContainer}
    />
  );
};

export default RadioButtonGroup;
