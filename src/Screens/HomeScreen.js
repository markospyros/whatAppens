import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={styles.title}>Today's form</Text>
      <View style={styles.container}>
        <FormComponent navigation={navigation} formName="Morning" />
        <FormComponent navigation={navigation} formName="Noon" />
        <FormComponent navigation={navigation} formName="Afternoon" />
        <FormComponent navigation={navigation} formName="Evening" />
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
