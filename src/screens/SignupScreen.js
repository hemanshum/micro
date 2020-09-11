import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextInput from "../components/TextInputComponent";

const SignupScreen = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Sign up</Text>
      <Text>You have chance to create new account if you really want to.</Text>
      <TextInput
        icon="user"
        color="#18191F"
        iconSize={24}
        placeholder="Full Name"
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default SignupScreen;
