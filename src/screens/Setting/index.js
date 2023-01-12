import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Header from "../../components/Header";

const Setting = ({ navigation }) => {
  return (
    <View>
      <Header />
      <Feather
        name={"menu"}
        size={18}
        color={"black"}
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
