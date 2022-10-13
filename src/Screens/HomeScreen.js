import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  let [morningStorage, setMorningStorage] = useState(0);
  let [noonStorage, setNoonStorage] = useState(0);
  let [afternoonStorage, setAfternoonStorage] = useState(0);
  let [eveningStorage, setEveningStorage] = useState(0);

  let [morningDisable, setMorningDisable] = useState(false);
  let [noonDisable, setNoonDisable] = useState(false);
  let [afternoonDisable, setAfternoonDisable] = useState(false);
  let [eveningDisable, setEveningDisable] = useState(false);

  const morningDisableCondition = () => {
    if (morningStorage === 12) {
      setMorningDisable(true);
    }
  };

  const noonDisableCondition = () => {
    if (noonStorage > 0) {
      setNoonDisable(true);
    }
  };

  const afternoonDisableCondition = () => {
    if (afternoonStorage > 0) {
      setAfternoonDisable(true);
    }
  };

  const eveningDisableCondition = () => {
    if (eveningStorage > 0) {
      setEveningDisable(true);
    }
  };

  let morningKey = "MORNINGKEY";
  let noonKey = "NOONKEY";
  let afternoonKey = "AFTERNOONKEY";
  let eveningKey = "EVENINGKEY";

  const load = async () => {
    try {
      let morningScoreStorage = await AsyncStorage.getItem(morningKey);
      let noonScoreStorage = await AsyncStorage.getItem(noonKey);
      let afternoonScoreStorage = await AsyncStorage.getItem(afternoonKey);
      let eveningScoreStorage = await AsyncStorage.getItem(eveningKey);

      if (morningScoreStorage !== null) {
        setMorningStorage(morningScoreStorage);
      }
      if (noonScoreStorage !== null) {
        setNoonStorage(noonScoreStorage);
      }
      if (afternoonScoreStorage !== null) {
        setAfternoonStorage(afternoonScoreStorage);
      }
      if (eveningScoreStorage !== null) {
        setEveningStorage(eveningScoreStorage);
      }
    } catch (error) {
      console.log(error);
    }
    morningDisableCondition();
    noonDisableCondition();
    afternoonDisableCondition();
    eveningDisableCondition();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={styles.title}>Today's form</Text>
      <View style={styles.container}>
        <FormComponent
          navigation={navigation}
          secretKey={morningKey}
          disability={morningDisable}
          formName="Morning"
        />
        <FormComponent
          navigation={navigation}
          secretKey={noonKey}
          disability={noonDisable}
          formName="Noon"
        />
        <FormComponent
          navigation={navigation}
          secretKey={afternoonKey}
          disability={afternoonDisable}
          formName="Afternoon"
        />
        <FormComponent
          navigation={navigation}
          secretKey={eveningKey}
          disability={eveningDisable}
          formName="Evening"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 40,
    fontSize: 30,
    fontWeight: "600",
  },
  container: {
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
