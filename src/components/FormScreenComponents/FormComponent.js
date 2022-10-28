import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerStatusState: (
        <View style={styles.answerContainerStyle}>
          <Text style={styles.answerStyle}>Answer</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#197CA5" />
        </View>
      ),
    };
  }

  currentHour = `${new Date().getHours()}:${new Date().getMinutes}`;

  // check = (icon) => {
  //   // const checkIcon = (
  //   //   <View style={styles.answerContainerStyle}>
  //   //     <AntDesign name="check" size={24} color="green" />
  //   //   </View>
  //   // );

  //   if (this.props.pointsArray.length !== 0) {
  //     this.setState({
  //       answerStatusState: icon,
  //     });
  //   }
  // };

  navigationToForm = () => {
    if (
      this.currentHour >= this.props.startHour &&
      this.currentHour <= this.props.endHour
    ) {
      if (this.props.pointsArray.length === 0) {
        {
          this.props.navigation.navigate("Form", {
            generalQuestionnaires: this.props.generalQuestionnaires,
            questionnaire: this.props.questionnaire,
            pointsArray: this.props.pointsArray,
            objectAnswerArray: this.props.objectAnswerArray,
            localObjectsArray: this.props.localObjectsArray,
            finalAnswersArray: this.props.finalAnswersArray,
          });
        }
      }
    }
  };

  componentDidMount() {
    const answerIcon = (
      <View style={styles.answerContainerStyle}>
        <Text style={styles.answerStyle}>Answer</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="#197CA5" />
      </View>
    );

    const lockIcon = (
      <View style={styles.answerContainerStyle}>
        <AntDesign name="lock" size={24} color="gray" />
      </View>
    );

    if (
      this.currentHour >= this.props.startHour &&
      this.currentHour <= this.props.endHour
    ) {
      this.setState({
        answerStatusState: answerIcon,
      });
    } else {
      this.setState({
        answerStatusState: lockIcon,
      });
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.navigationToForm}
        style={styles.container}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="clipboard-text"
            size={40}
            color="#197CA5"
            style={styles.icon}
          />
          <Text style={styles.formNameStyle}>{this.props.formName}</Text>
        </View>
        {this.state.answerStatusState}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 30,
    borderTopColor: "black",
    borderTopWidth: 1,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  iconContainer: { flexDirection: "row", justifyContent: "space-between" },
  formNameStyle: { padding: 10, fontWeight: "600", fontSize: 15 },
  answerContainerStyle: { flexDirection: "row", padding: 10 },
  answerStyle: {
    fontWeight: "600",
    fontSize: 17,
    color: "#197CA5",
  },
});
