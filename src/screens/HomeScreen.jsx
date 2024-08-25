import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import TabNavigation from "../navigations/Tab";
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default HomeScreen;