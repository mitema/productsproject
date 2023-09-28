import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

const AddToCart = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.mainCartContainer}>
        <View style={styles.item}>
          <FontAwesomeIcon name="shopping-bag" color="white" size={20} />
        </View>
        <View style={styles.space} />
        <View style={styles.item}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  mainCartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#DB3C25",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  item: {},
  space: {
    width: 5,
  },
});
