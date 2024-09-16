import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import my1 from "../assets/img/recommentPlant/myPlant/my1.png"
import my2 from "../assets/img/recommentPlant/myPlant/my2.png"
import my3 from "../assets/img/recommentPlant/myPlant/my3.png"
import my4 from "../assets/img/recommentPlant/myPlant/my4.png"
import my5 from "../assets/img/recommentPlant/myPlant/my5.png"
import my6 from "../assets/img/recommentPlant/myPlant/my6.png"


const Plant = ({text, image}) => {
    return (
    <View style={styles.petPlant}>
        <Image source={image}/>
        <Text style={styles.plantText}>{text}</Text>
    </View>
    )
}

const RecordPlant = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Plant text="씩씩이" image={my1}/>
        <Plant text="싹싹이" image={my2}/>
      </View>
      <View style={styles.subContainer}>
        <Plant text="쏙쏙이" image={my3}/>
        <Plant text="쑥쑥이" image={my4}/>
      </View>
      <View style={styles.subContainer}>
        <Plant text="삐죽이" image={my5}/>
        <Plant text="길쭉이" image={my6}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
  },

  petPlant: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
    height: 125,
    margin: "2%",

    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
        shadowOffset: {
        width: 10,
        height: 15,
        },
        shadowOpacity: 0.03,
        shadowRadius: 10,
    },
  plantText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default RecordPlant;