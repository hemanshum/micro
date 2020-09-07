import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const OnbordingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{ width: "90%" }}
          resizeMode="contain"
          source={require("../assets/imgs/onboarding-image.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headline}>
          Micro {"\n"} Blogging App
        </Text>
        <Text style={styles.subheading}>
          You can write and read micro Blogs on this app with the max length of
          1024 Characters
        </Text>
      </View>
      <View style={[styles.btnContainer]}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.blkBtn]}>
          <Text style={[styles.btnText, styles.blkBtn]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imgContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
    width: "100%",
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headline: {
    fontFamily: "mrt-xbold",
    fontSize: 36,
    textAlign: "center",
  },
  subheading: {
    fontFamily: "mrt-mid",
    fontSize: 21,
    textAlign: "center",
    padding: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  btn: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#18191F",
    borderRadius: 15,
    paddingHorizontal: "15%",
    paddingVertical: 15,
    margin: 10,
  },
  btnText: {
    fontFamily: "mrt-xbold",
    fontSize: 21,
    textAlign: "center",
  },
  blkBtn: {
    backgroundColor: "#18191F",
    color: "#fff",
  },
});

export default OnbordingScreen;
