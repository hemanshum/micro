import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeadlineComponent = ({ children, style }) => {
  return <Text style={[styles.headline, style]}>{children}</Text>;
};

export default HeadlineComponent;

const styles = StyleSheet.create({
  headline: {
    fontSize: 36,
    fontFamily: "mrt-xbold",
    color: "#18191F",
  },
});
