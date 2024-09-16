import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";

const MyScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  subcontainer: {
    backgroundColor: "#367B40",
    width: "100%",
    height: 220,
    borderRadius: 20,
  }
  
});

export default MyScreen;