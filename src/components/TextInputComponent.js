import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const TextInputComponent = ({
  value,
  onChangeText,
  icon,
  iconSize,
  color,
  placeholder,
  style,
}) => {
  return (
    <View style={[style, styles.container]}>
      <Feather style={styles.icon} name={icon} size={iconSize} color={color} />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#18191F",
    borderRadius: 16,
    height: 56,
  },
  icon: {
    marginLeft: 15,
  },
  textInput: {
    width: "85%",
    height: "100%",
    paddingHorizontal: 10,
    fontSize: 21,
    fontFamily: "mrt-mid",
    color: "#18191F",
  },
});

export default TextInputComponent;
