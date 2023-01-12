import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { data } from "./components/data";
import ItemWelcome from "./components/ItemWelcome";
import Paginator from "./components/Paginator";
import { useRef } from "react";

const { width } = Dimensions.get("window");
const Welcome = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  if (data && data.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ItemWelcome item={item} />}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x: scrollX },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
        />
        <View style={styles.dot}>
          <Paginator scrollX={scrollX} data={data} />
        </View>
        <View style={styles.text}>
          <Text style={{}}>Cảm ơn bạn đã sử dụng ưng dụng</Text>
          <Text style={{ marginTop: 10 }}>
            Chúc bạn có những trải nghiệm tốt nhất
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: 100,
            height: 100,
            bottom: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#DBDBDB",
            borderRadius: 50,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          // onPress={() => navigator.navigate("HOME")}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return null;
};

export default Welcome;

const styles = StyleSheet.create({
  dot: {
    alignItems: "center",
    bottom: 20,
  },
  text: {
    position: "absolute",
    alignItems: "center",
    marginTop: width / 4,
    // marginTop: 20,
  },
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
