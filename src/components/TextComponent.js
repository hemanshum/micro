import React from "react";
import { StyleSheet, Text } from "react-native";

const TextComponent = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: "mrt-mid",
    fontSize: 17,
    color: "#18191F",
  },
});
