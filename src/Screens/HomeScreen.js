import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormComponent from "../components/FormScreenComponents/FormComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import nettskjema from "../api/nettskjema";
import { divideArray } from "../utils/divideArray";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalQuestionnaires: [],
      morningPointsArray: [],
      noonPointsArray: [],
      afternoonPointsArray: [],
      eveningPointsArray: [],
      morningObjectAnswerArray: [],
      noonObjectAnswerArray: [],
      afternoonObjectAnswerArray: [],
      eveningObjectAnswerArray: [],
    };
  }

  getNettskjemaData = () => {
    nettskjema.get("/v2/forms/285961/questions").then((res) => {
      const questions = res.data;
      this.setState({ generalQuestionnaires: questions });
    });
  };

  componentDidMount() {
    this.getNettskjemaData();
  }

  // sendData = () => {
  //   answers = [
  //     {
  //       type: "SINGLE_OPTION",
  //       questionId: 4927863,
  //       id: 11267478,
  //     },
  //     {
  //       type: "SINGLE_OPTION",
  //       questionId: 4927877,
  //       id: 11267510,
  //     },
  //     {
  //       type: "SINGLE_OPTION",
  //       questionId: 4927878,
  //       id: 11267513,
  //     },
  //     {
  //       type: "SINGLE_OPTION",
  //       questionId: 4927879,
  //       id: 11267518,
  //     },
  //   ];

  //   nettskjema.post("v2/private/deliver/form/285961", { answers });
  // };

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
            startHour={"8:00"}
            endHour={"12:00"}
            objectAnswerArray={this.state.morningObjectAnswerArray}
          />
          <FormComponent
            questionnaire={noonQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.noonPointsArray}
            formName="Noon"
            startHour={"12:00"}
            endHour={"16:00"}
            objectAnswerArray={this.state.noonObjectAnswerArray}
          />
          <FormComponent
            questionnaire={afternoonQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.afternoonPointsArray}
            formName="Afternoon"
            startHour={"16:00"}
            endHour={"20:00"}
            objectAnswerArray={this.state.afternoonObjectAnswerArray}
          />
          <FormComponent
            questionnaire={eveningQuestionnaires}
            navigation={this.props.navigation}
            pointsArray={this.state.eveningPointsArray}
            formName="Evening"
            startHour={"20:00"}
            endHour={"24:00"}
            objectAnswerArray={this.state.eveningObjectAnswerArray}
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
