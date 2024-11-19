import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import my1 from "../assets/img/recommendPlant/myPlant/my1.png"
import my2 from "../assets/img/recommendPlant/myPlant/my2.png"
import my3 from "../assets/img/recommendPlant/myPlant/my3.png"
import my4 from "../assets/img/recommendPlant/myPlant/my4.png"
import my5 from "../assets/img/recommendPlant/myPlant/my5.png"
import my6 from "../assets/img/recommendPlant/myPlant/my6.png"

const pushNavigation = (navigation, plantName, plantImage) => {
  navigation.navigate('RecordPlantStack', 
    { screen: 'DescriptionScreen', 
      params: { 
        name: plantName, 
        image: plantImage
      }});

}

const Plant = ({text, image}) => {
    return (
    <View>
        <Image source={image}/>
        <Text style={styles.plantText}>{text}</Text>
    </View>
    )
}

const RecordPlant = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => pushNavigation(navigation, '씩씩이', my1)} style={styles.petPlant}>
          <Plant text="씩씩이" image={my1}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecordPlantStack', { screen: 'DescriptionScreen' })} style={styles.petPlant}>
          <Plant text="싹싹이" image={my2}/>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RecordPlantStack', { screen: 'DescriptionScreen' })} style={styles.petPlant}>
          <Plant text="쏙쏙이" image={my3}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecordPlantStack', { screen: 'DescriptionScreen' })} style={styles.petPlant}>
          <Plant text="쑥쑥이" image={my4}/>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RecordPlantStack', { screen: 'DescriptionScreen' })} style={styles.petPlant}>
          <Plant text="삐죽이" image={my5}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecordPlantStack', { screen: 'DescriptionScreen' })} style={styles.petPlant}>
          <Plant text="길쭉이" image={my6}/>
        </TouchableOpacity>
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
    // fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default RecordPlant;