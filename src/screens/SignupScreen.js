import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import TextInput from "../components/TextInputComponent";
import Headline from "../components/HeadlineComponent";
import Text from "../components/TextComponent";
import Button from "../components/ButtonComponent";

const SignupScreen = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Button style={styles.button}>
        <Feather name="arrow-left" size={24} color="black" />
      </Button>
      <Headline style={styles.headline}>Sign up</Headline>
      <Text style={styles.subHeading}>
        You have chance to create new account if you really want to.
      </Text>
      <TextInput
        style={styles.input}
        icon="user"
        color="#18191F"
        iconSize={24}
        placeholder="Full Name"
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
      <TextInput
        style={styles.input}
        icon="mail"
        color="#18191F"
        iconSize={24}
        placeholder="Email Address"
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
      <TextInput
        style={styles.input}
        icon="lock"
        color="#18191F"
        iconSize={24}
        placeholder="Password"
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
      <Button style={styles.btn}>Register</Button>
      <Text style={styles.smallText}>
        Already have an account?
        <Text style={styles.goHere}> Go here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderBottomWidth: 4,
    borderRadius: 60,
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  subHeading: {
    marginVertical: 10,
  },
  input: {
    marginTop: 15,
  },
  btn: {
    marginTop: 30,
  },
  smallText: {
    fontSize: 13,
    marginTop: 30,
  },
  goHere: {
    fontSize: 13,
    color: "#F95A2C",
    fontFamily: "mrt-bold",
  },
});

export default SignupScreen;
