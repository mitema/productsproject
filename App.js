import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import MenuScreen from "./screens/MenuScreen";
import DetailScreen from "./screens/DetailScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" color="gray" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={DetailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="menu" size={30} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-outline" size={30} color="gray" />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <EvilIcons name="user" color="gray" size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
