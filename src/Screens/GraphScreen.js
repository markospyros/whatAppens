import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Dimensions } from "react-native";
import { getWeekNumber } from "../utils/getWeekNumber";
import { LineChart } from "react-native-chart-kit";
import { useIsFocused } from "@react-navigation/native";

const GraphScreen = () => {
  const [depPoints, setDepPoints] = useState([]);

  const getItemList = async () => {
    try {
      const weekKey = getWeekNumber();
      const data = await AsyncStorage.getItem(weekKey);

      const output = JSON.parse(data);

      setDepPoints(output);
    } catch (err) {
      console.log(err);
    }
  };

  if (useIsFocused() === true) {
    getItemList();
  }

  const checkData = () => {
    if (depPoints.length === 0) {
      return (
        <View>
          <Text>No chart data to display!</Text>
        </View>
      );
    }

    return (
      <LineChart
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              data: depPoints,
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    );
  };

  return <SafeAreaView>{checkData()}</SafeAreaView>;
};

export default GraphScreen;
