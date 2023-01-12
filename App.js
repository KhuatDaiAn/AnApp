import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "../Love/src/screens/Home";
import Setting from "../Love/src/screens/Setting";
import Welcome from "../Love/src/screens/Welcome";
// import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
import { Container, Content, Header, Left, Body, Icon } from "native-base";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="Setting" component={SettingScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    // <Setting />
    <Welcome />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
