import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RoundedButton from "../components/RoundedButton";
import { CartContext } from "../globalContext";

const DetailScreen = ({ route }) => {
  const [quantity, setProductQuantity] = useState(1);
  const { products, addProductToCart, removeAProductFromCart } =
    useContext(CartContext);
  const { imageUrl, imageDescription, productId, productName, productPrice } =
    route.params;

  console.log(`imageUrl: ${imageUrl}`);
  console.log(`imageDescription:${imageDescription}`);
  console.log(`productID: ${productId}`);
  console.log(`productName: ${productName}`);
  console.log(`productPrice: ${productPrice}`);

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
  const handleAddButtonClicked = (productID) => {
    console.log("positive button clicked");

    setProductQuantity(quantity + 1);
  };

  const handleAddToCartPressed = (
    productID,
    productQuantity,
    productName,
    productPrice,
    productUrl
  ) => {
    console.log("add to cart presserd");
    addProductToCart(
      productID,
      productQuantity,
      productName,
      productPrice,
      productUrl
    );
  };

  const handleNegativeButtonClicked = (productID) => {
    console.log("negative button clicked");
    //removeAProductFromCart(productID);
    setProductQuantity(quantity - 1);
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

      <View style={styles.arithmeticContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleAddButtonClicked(productId)}>
            <View style={styles.plusQuantityTextContainer}>
              <Text style={styles.plusQuantityText}>+</Text>
            </View>
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity
            onPress={() => handleNegativeButtonClicked(productId)}
          >
            <View style={styles.minusQuantityTextContainer}>
              <Text style={styles.minusQuantityText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <RoundedButton
          style={styles.roundedButton}
          title="Add to cart"
          buttonTextColor="#FFFFFF"
          colorBackground="#DB3C25"
          onPress={() =>
            handleAddToCartPressed(
              productId,
              quantity,
              productName,
              productPrice,
              imageUrl
            )
          }
        />
        <View style={styles.margin} />
        <RoundedButton
          style={styles.secondRoundedButton}
          title="Subscribe to a plan"
          buttonTextColor="#DB3C25"
          imageBorderWidth={2}
          imageBorderColor="#DB3C25"
        />
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arithmeticContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  plusQuantityTextContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  minusQuantityTextContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  plusQuantityText: {
    marginLeft: 10,
  },
  minusQuantityText: {
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  roundedButton: {
    borderRadius: 25,
    marginRight: 30,
    marginLeft: 40,
    marginBottom: 30,
  },
  secondRoundedButton: {
    borderRadius: 25,
    marginRight: 30,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
  },
  margin: {
    height: 16,
  },
});
