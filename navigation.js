import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import  OnBoarding  from "./screens/OnBoarding/OnBoarding";
import SignIn from "./screens/Authentication/SignIn";
import SignUp from "./screens/Authentication/SignUp";
import ForgotPassword from "./screens/Authentication/ForgotPassword";
import Home from "./screens/Home";
import Checkout from "./screens/Cart/Checkout";
import MyCart from "./screens/Cart/MyCart";
import MyCard from "./screens/Card/MyCard";
import Success from "./screens/Cart/Success";
import DeliveryStatus from "./screens/Delivery/DeliveryStatus";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/stores";


const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding" screenOptions={screenOptions}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="MyCard" component={MyCard} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
