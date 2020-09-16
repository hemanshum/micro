import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from "./TextComponent";
import { Feather } from "@expo/vector-icons";

const CardComponent = ({ title, img, author, createdAt, color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.cardHeader}>
        <View style={styles.authorDetails}>
          <Image style={styles.img} source={{ uri: img }} />
          <Text style={styles.author}>{author}</Text>
        </View>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        <View style={styles.iconContainer}>
          <Feather name="heart" size={24} color="black" />
          <Text style={styles.iconText}>2</Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather name="message-square" size={24} color="black" />
          <Text style={styles.iconText}>23</Text>
        </View>
        <View style={styles.iconContainer}>
          <Feather name="share-2" size={24} color="black" />
          <Text style={styles.iconText}>12</Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: "#18191F",
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#18191F",
  },
  author: {
    fontFamily: "mrt-xbold",
    fontSize: 16,
    marginHorizontal: 10,
    color: "#18191F",
  },
  title: {
    fontFamily: "mrt-xbold",
    fontSize: 36,
    color: "#18191F",
    marginVertical: 20,
  },
  createdAt: {
    fontFamily: "mrt-xbold",
    fontSize: 13,
    color: "#18191F",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    fontFamily: "mrt-xbold",
    fontSize: 13,
    marginLeft: 5,
    color: "#18191F",
  },
});
