import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const Home = ({ navigation }) => {
  return (
    <Feather
      name={"menu"}
      size={18}
      color={"black"}
      onPress={() => this.props.navigation.navigate("DrawerOpen")}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
