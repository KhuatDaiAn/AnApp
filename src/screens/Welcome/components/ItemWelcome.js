import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const ItemWelcome = ({ item }) => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();
  const image = item.url;
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Image
        style={{
          width: width / 1.05,
          height: "90%",
          borderBottomLeftRadius: 80,
          borderRadius: 10,
        }}
        source={image}
      />
    </View>
  );
};

export default ItemWelcome;

const styles = StyleSheet.create({});
