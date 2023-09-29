import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = ({
  onPress,
  title,
  colorBackground,
  buttonTextColor,
  imageBorderWidth,
  imageBorderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colorBackground,
          borderWidth: imageBorderWidth,
          borderColor: imageBorderColor,
        },
      ]}
    >
      <Text style={[styles.buttonText, { color: buttonTextColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: "#DB3C25", // Change to your desired color (e.g., #4CAF50 for green)
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    // color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RoundedButton;
