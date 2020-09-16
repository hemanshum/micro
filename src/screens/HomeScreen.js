import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import Headline from "../components/HeadlineComponent";
import Card from "../components/CardComponent";

const blogs = [
  {
    id: "123",
    createdAt: "12Mins ago",
    title: "Contra wireframe kit awesome",
    author: "Contra Wireframe",
    commentCount: 24,
    likeCount: 203,
    color: "#FFD465",
    authorImg: "https://api.adorable.io/avatars/285/abott@adorable.png",
  },
  {
    id: "1234",
    createdAt: "12Mins ago",
    title: "Contra wireframe kit awesome",
    author: "Contra Wireframe",
    commentCount: 24,
    likeCount: 203,
    color: "#FF9692",
    authorImg: "https://api.adorable.io/avatars/285/abott@adorable.png",
  },
  {
    id: "12345",
    createdAt: "12Mins ago",
    title: "Contra wireframe kit awesome",
    author: "Contra Wireframe",
    commentCount: 24,
    likeCount: 203,
    color: "#00C6AE",
    authorImg: "https://api.adorable.io/avatars/285/abott@adorable.png",
  },
  {
    id: "123456",
    createdAt: "12Mins ago",
    title: "Contra wireframe kit awesome",
    author: "Contra Wireframe",
    commentCount: 24,
    likeCount: 203,
    color: "",
    authorImg: "https://api.adorable.io/avatars/285/abott@adorable.png",
  },
];

const HomeScreen = () => {
  const renderCard = ({ item }) => {
    return (
      <Card
        title={item.title}
        img={item.authorImg}
        author={item.author}
        createdAt={item.createdAt}
        color={item.color}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>Micro</Headline>
      <View style={styles.subContainer}>
        <FlatList
          data={blogs}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 50,
  },
  headline: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  subContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  list: {
    marginBottom: 80,
  },
});

export default HomeScreen;
