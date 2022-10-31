import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { divideArray } from "../utils/divideArray";
import axios from "axios";
import { extractQuestionnaires } from "../utils/extractQuestionnaires";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalQuestionnaires: [],
      morningPointsArray: [],
      noonPointsArray: [],
      afternoonPointsArray: [],
      eveningPointsArray: [],
      localObjectsArray: [],
      finalAnswersArray: [],
    };
  }

  getNettskjemaData = () => {
    axios
      .get("https://nettskjema.no/answer/answer.json?formId=285961")
      .then((res) => {
        const questionnaires = [];
        extractQuestionnaires(res.data.form.pages[0].elements, questionnaires);
        this.setState({ generalQuestionnaires: questionnaires });
      });
  };

  componentDidMount() {
    this.getNettskjemaData();
  }

  render() {
    const morningQuestionnaires = [];
    const noonQuestionnaires = [];
    const afternoonQuestionnaires = [];
    const eveningQuestionnaires = [];

    divideArray(this.state.generalQuestionnaires, morningQuestionnaires, 0, 3);
    divideArray(this.state.generalQuestionnaires, noonQuestionnaires, 3, 6);
    divideArray(
      this.state.generalQuestionnaires,
      afternoonQuestionnaires,
      6,
      9
    );
    divideArray(
      this.state.generalQuestionnaires,
      eveningQuestionnaires,
      9,
      this.state.generalQuestionnaires.length
    );

    return (
      <SafeAreaView>
        <StatusBar />
        <Text style={styles.title}>Today's form</Text>
        <View style={styles.container}>
          <FormComponent
            questionnaire={morningQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.morningPointsArray}
            formName="Morning"
            startHour={8}
            endHour={12}
            generalQuestionnaires={this.state.generalQuestionnaires}
            localObjectsArray={this.state.localObjectsArray}
            finalAnswersArray={this.state.finalAnswersArray}
          />
          <FormComponent
            questionnaire={noonQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.noonPointsArray}
            formName="Noon"
            startHour={12}
            endHour={16}
            generalQuestionnaires={this.state.generalQuestionnaires}
            localObjectsArray={this.state.localObjectsArray}
            finalAnswersArray={this.state.finalAnswersArray}
          />
          <FormComponent
            questionnaire={afternoonQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.afternoonPointsArray}
            formName="Afternoon"
            startHour={16}
            endHour={20}
            generalQuestionnaires={this.state.generalQuestionnaires}
            localObjectsArray={this.state.localObjectsArray}
            finalAnswersArray={this.state.finalAnswersArray}
          />
          <FormComponent
            questionnaire={eveningQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.eveningPointsArray}
            formName="Evening"
            startHour={20}
            endHour={24}
            generalQuestionnaires={this.state.generalQuestionnaires}
            localObjectsArray={this.state.localObjectsArray}
            finalAnswersArray={this.state.finalAnswersArray}
          />
        </View>
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
