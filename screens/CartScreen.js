import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { CartContext } from "../globalContext";
import Icon from "react-native-vector-icons/AntDesign";
import { getNumbersAfterDollarSign } from "../utilities";
import RoundedButton from "../components/RoundedButton";
const CartScreen = () => {
  const { products, addProductToCart, removeAProductFromCart, deleteFromCart } =
    useContext(CartContext);

  //const [productPrices, setProductPrices] = useState([]);
  const productPrices = [];

  const handleNegativeButtonClicked = (productID) => {
    removeAProductFromCart(productID);
  };

  const getCalculatedPrice = (productPrice, productQuantity) => {
    console.log(`productPrice: ${productPrice}`);
    const newPrice = getNumbersAfterDollarSign(productPrice) * productQuantity;
    //setProductPrices([...productPrices, newPrice]);
    productPrices.push(newPrice);
    return "$" + newPrice;
  };

  const handleDeletePressed = (productID) => {
    deleteFromCart(productID);
  };

  const handlePlusButtonClicked = (product) => {
    addProductToCart(product.id, 1, product.name, product.price, product.url);
  };

  const getTotalCost = (products) => {
    var totalPrice = 0;
    products.forEach((price, index) => {
      totalPrice += price;
    });
    console.log(`totalPrice: ${totalPrice}`);
    return totalPrice;
  };

  return (
    <View>
      {console.log(products)}
      {products.map((product, index) => {
        return (
          <View key={index} style={styles.productContainer}>
            <View>
              <Image source={product.productUrl}></Image>
            </View>
            <View style={[styles.item, styles.secondItem]}>
              <Text>{product.name}</Text>
              <Text>
                {getCalculatedPrice(product.price, product.quantity)}

                {/* {productPrices
                  .push
                  // getNumbersAfterDollarSign(product.price) * product.quantity
                  ()} */}
                {/* {productPrices.push(
                  getNumbersAfterDollarSign(product.price) * product.quantity
                )} */}
              </Text>
              <TouchableOpacity onPress={() => handleDeletePressed(product.id)}>
                <Icon name="delete" size={40} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={[styles.item, styles.lastItemContainer]}>
              <TouchableOpacity
                onPress={() => handleNegativeButtonClicked(product.id)}
              >
                <View style={styles.minusContainer}>
                  <Text>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <Text>{product.quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handlePlusButtonClicked(product)}
              >
                <View style={styles.plusContainer}>
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
      <View style={styles.totalContainer}>
        <View style={styles.totalText}>
          <Text>Total {`(${products.length} items)`}</Text>
        </View>
        <View style={styles.totalCostText}>
          <Text>{`$${getTotalCost(productPrices)}`}</Text>
        </View>
      </View>
      <RoundedButton
        title={`Checkout - $${getTotalCost(productPrices)}`}
        buttonTextColor="#FFFFFF"
        colorBackground="#DB3C25"
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-evely",
  },
  item: {
    flex: 1,
    margin: 10,
  },
  quantityContainer: {
    marginRight: 20,
  },
  secondItem: {
    width: 50,
  },
  lastItemContainer: {
    alignItems: "flex-end",
  },
  minusContainer: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  plusContainer: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  totalContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  totalText: {
    flex: 1,
    marginLeft: 10,
  },
  totalCostText: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10,
    // width: "100%",
    // paddingHorizontal: 100,
    // alignSelf: "flex-end",
  },
});
