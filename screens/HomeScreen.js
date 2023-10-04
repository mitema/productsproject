import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useContext, useState } from "react";
import { reduceLettersIfGreatherThan12 } from "../utilities";
import { productsstoreArray } from "../productstore";
import AddToCart from "../components/AddToCart";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../globalContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { products, addProductToCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCartPress = (
    productID,
    productQuantity,
    productName,
    productPrice,
    productUrl
  ) => {
    addProductToCart(
      productID,
      productQuantity,
      productName,
      productPrice,
      productUrl
    );
    console.log("Button pressed");
    console.log(`productPrice: ${productPrice}`);
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (products.name === query) {
      console.log("query matches");
    }
  };
  const handleImageClick = (
    productUrl,
    productDescription,
    productId,
    productName,
    productPrice
  ) => {
    console.log("image clicked");
    console.log(`productUrl: ${productUrl}`);

    navigation.navigate("Menu", {
      imageUrl: productUrl,
      imageDescription: productDescription,
      productId: productId,
      productName: productName,
      productPrice: productPrice,
    });
  };

  return (
    <ScrollView>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 10,
          paddingLeft: 10,
        }}
        placeholder="Search"
        onChangeText={() => handleSearch(productsstoreArray)}
        value={searchQuery}
      />
      <View style={styles.row}>
        <View style={styles.column}>
          {productsstoreArray.map((product, index) => {
            {
              if (index % 2 == 0) {
                return (
                  <View key={index} style={styles.firstColumnContainer}>
                    <View style={styles.mainContainer}>
                      {console.log(product.imageUrl)}

                      <View style={styles.iconContainer}>
                        <Icon name="heart-o" size={30} color="black" />
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          handleImageClick(
                            product.imageUrl,
                            product.description,
                            product.id,
                            product.name,
                            product.price
                          )
                        }
                      >
                        <Image source={product.imageUrl} />
                      </TouchableOpacity>

                      <View style={styles.priceContainer}>
                        <View style={styles.firstTextItem}>
                          <Text>
                            {reduceLettersIfGreatherThan12(product.name)}
                          </Text>
                        </View>
                        <View style={styles.endTextItem}>
                          <Text>{product.price}</Text>
                        </View>
                      </View>

                      <AddToCart
                        style={{ marginRight: 10, marginLeft: 10 }}
                        title="Add to Cart"
                        onPress={() =>
                          handleCartPress(
                            product.id,
                            1,
                            product.name,
                            product.price,
                            product.imageUrl
                          )
                        }
                      />
                    </View>
                  </View>
                );
              }
            }
          })}
        </View>
        <View style={styles.column}>
          {productsstoreArray.map((product, index) => {
            {
              if (index % 2 > 0) {
                return (
                  <View key={index} style={styles.firstColumnContainer}>
                    <View style={styles.mainContainer}>
                      {console.log(product.imageUrl)}

                      <View style={styles.iconContainer}>
                        <Icon name="heart-o" size={30} color="black" />
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          handleImageClick(
                            product.imageUrl,
                            product.description,
                            product.id,
                            product.name,
                            product.price
                          )
                        }
                      >
                        <Image
                          style={styles.imageContainer}
                          source={product.imageUrl}
                        />
                      </TouchableOpacity>

                      <View style={styles.priceContainer}>
                        <View>
                          <Text>
                            {reduceLettersIfGreatherThan12(product.name)}
                          </Text>
                        </View>
                        <View>
                          <Text>{product.price}</Text>
                        </View>
                      </View>
                      {console.log(product)}
                      <AddToCart
                        style={{ marginRight: 10, marginLeft: 10 }}
                        title="Add to Cart"
                        onPress={() =>
                          handleCartPress(
                            product.id,
                            1,
                            product.name,
                            product.price,
                            product.imageUrl
                          )
                        }
                      />
                    </View>
                  </View>
                );
              }
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 8,
  },
  firstColumnContainer: {
    marginBottom: 10,
    backgroundColor: "white",
  },
  mainContainer: {
    marginBottom: 10,
    justifyContent: "center",
  },
  iconContainer: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 5,
  },
  imageContainer: {
    marginLeft: 40,
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
