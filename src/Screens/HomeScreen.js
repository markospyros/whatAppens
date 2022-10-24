import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import { questionaires } from "../components/FormScreenComponents/Question/Questions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import nettskjema from "../api/nettskjema";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnaires: [],
      morningPointsArray: [],
      noonPointsArray: [],
      afternoonPointsArray: [],
      eveningPointsArray: [],
    };
  }

  getNettskjemaData = () => {
    nettskjema.get("/v2/forms/285961/questions").then((res) => {
      const questions = res.data;
      this.setState({ questionnaires: questions });
    });
  };

  componentDidMount() {
    this.getNettskjemaData();
  }

  sendData = () => {
    answers = [
      {
        type: "SINGLE_OPTION",
        questionId: 4927863,
        id: 11267478,
      },
      {
        type: "SINGLE_OPTION",
        questionId: 4927877,
        id: 11267510,
      },
      {
        type: "SINGLE_OPTION",
        questionId: 4927878,
        id: 11267513,
      },
      {
        type: "SINGLE_OPTION",
        questionId: 4927879,
        id: 11267518,
      },
    ];

    nettskjema.post("v2/private/deliver/form/285961", { answers });
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <Text style={styles.title}>Today's form</Text>
        <View style={styles.container}>
          <FormComponent
            questionnaire={this.state.questionnaires}
            navigation={this.props.navigation}
            array={this.state.morningPointsArray}
            formName="Morning"
          />
          <FormComponent
            questionnaire={this.state.questionnaires}
            navigation={this.props.navigation}
            array={this.state.noonPointsArray}
            formName="Noon"
          />
          <FormComponent
            questionnaire={this.state.questionnaires}
            navigation={this.props.navigation}
            array={this.state.afternoonPointsArray}
            formName="Afternoon"
          />
          <FormComponent
            questionnaire={this.state.questionnaires}
            navigation={this.props.navigation}
            array={this.state.eveningPointsArray}
            formName="Evening"
          />
        </View>
        {/* <Button onPress={this.sendData} title="Send" /> */}
      </SafeAreaView>
    );
  }
}

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
