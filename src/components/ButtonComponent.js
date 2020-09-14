import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ButtonComponent = ({ children, contentStyle, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={[styles.text, contentStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "#18191F",
    borderRadius: 16,
    backgroundColor: "#FFBD12",
    height: 69,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "mrt-xbold",
    fontSize: 21,
  },
});
