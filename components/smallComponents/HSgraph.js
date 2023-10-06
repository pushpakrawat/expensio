import { View, Text } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function HSgraph() {
  return (
    <View>
     
      <LineChart
        data={{
          labels: [1, 7, 14, 21, 28],
          datasets: [
            {
              data: [
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="₹"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#42B3F5",
          backgroundGradientTo: "#42B3F5",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FFDC32",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    </View>
  );
}
