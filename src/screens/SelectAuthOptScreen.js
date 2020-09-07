import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const SelectAuthOptScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={{
            width: "100%",
            height: 600,
          }}
          resizeMode="contain"
          source={require("../assets/imgs/SelectAuthOpt.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>
            Authentication
          </Text>
          <Text style={styles.subheading}>
            Select your options below to Login or Register to Micro
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btn, styles.blkBtn]}>
            <Fontisto
              style={styles.icon}
              name="email"
              size={24}
              color="#fff"
            />

            <Text style={styles.btnText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.googleBtn]}>
            <Fontisto
              style={styles.icon}
              name="google"
              size={24}
              color="#fff"
            />
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.fbBtn]}>
            <Fontisto
              style={styles.icon}
              name="facebook"
              size={24}
              color="#fff"
            />
            <Text style={styles.btnText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBD12",
    padding: 10,
  },

  imgContainer: {
    flex: 1,
  },
  subContainer: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#18191F",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },

  headline: {
    fontFamily: "mrt-xbold",
    fontSize: 36,
    textAlign: "center",
    color: "#18191F",
  },
  subheading: {
    fontFamily: "mrt-mid",
    fontSize: 21,
    textAlign: "center",
    padding: 10,
    color: "#18191F",
  },
  btn: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "#18191F",
    borderRadius: 15,
    paddingHorizontal: "15%",
    paddingVertical: 15,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 50,
  },
  btnTxtContainer: {},
  btnText: {
    fontFamily: "mrt-xbold",
    fontSize: 21,
    textAlign: "center",
    color: "#fff",
  },
  googleBtn: {
    backgroundColor: "#DB4437",
  },
  fbBtn: {
    backgroundColor: "#4267B2",
  },
  blkBtn: {
    backgroundColor: "#18191F",
  },
});

export default SelectAuthOptScreen;
