import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FormComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Form")}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="clipboard-text"
          size={40}
          color="#197CA5"
          style={styles.icon}
        />
        <Text style={styles.formNameStyle}>{props.formName}</Text>
      </View>
      <View style={styles.answerContainerStyle}>
        <Text style={styles.answerStyle}>Answer</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="#197CA5" />
      </View>
    </TouchableOpacity>
  );
};

export default FormComponent;

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
