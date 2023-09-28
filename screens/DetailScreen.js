import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DetailScreen = ({ route }) => {
  const { imageUrl, imageDescription } = route.params;

  console.log(`imageUrl: ${imageUrl}`);
  console.log(`imageDescription:${imageDescription}`);
  //   const jsonObject = {
  //     imageUrl: require(imageUrl),
  //   };
  //var formattedUrl = "." + imageUrl;
  //   console.log(`formattedurl:${jsonObject.imageUrl}`);
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: "Item 1", content: "Content for Item 1" },
    { title: "Item 2", content: "Content for Item 2" },
    { title: "Item 3", content: "Content for Item 3" },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <View>
        <View>
          <Text>{imageDescription}</Text>
        </View>
      </View>
      <View>
        {items.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => toggleItem(index)}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text>{item.title}</Text>
                <Icon
                  name={activeIndex === index ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#000"
                />
              </View>
            </TouchableOpacity>
            {activeIndex === index && <Text>{item.content}</Text>}
          </View>
        ))}
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
