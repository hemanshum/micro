import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import OnbordingScreen from "./src/screens/OnbordingScreen";
import SelectAuthOptScreen from "./src/screens/SelectAuthOptionScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import HomeScreen from "./src/screens/HomeScreen";

//Configured fonts to use
const loadFonts = () => {
  return Font.loadAsync({
    "mrt-reg": require("./assets/fonts/Montserrat-Regular.ttf"),
    "mrt-mid": require("./assets/fonts/Montserrat-Medium.ttf"),
    "mrt-semibold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mrt-xbold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  //Show App loading till fonts are loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "mrt-xbold",
    fontSize: 30,
  },
});
