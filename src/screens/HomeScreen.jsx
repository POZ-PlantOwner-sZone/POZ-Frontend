import React, { useState } from "react";
import { TouchableOpacity, ScrollView, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import Shop from "../component/Shop"

import camera from "../assets/img/home/camera.png"
import armchair from "../assets/img/home/armchair.png"
import RecProduct from "../component/RecProduct";

const Section = ({text, image}) => {
  return (
    <View style={styles.petPlant}>
      <Text style={styles.plantText}>{text}</Text>
      <Image source={image} style={styles.imageStyle}/>
    </View>
  )
}

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.petPlantSection}>
          <Section text="반려식물 사진 찍기" image={camera}/>
          <Section text="반려식물 업로드" image={armchair}/>
        </View>
        <Text style={styles.title}>이번 달 추천 상품</Text>
        <View>
          <RecProduct />
        </View>
        <Text style={styles.title}>캐릭터 상점</Text>
        <View>
          <Shop />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, petPlantSection: {
    flexDirection: "row",
    justifyContent: "space-around",

    height: 180,
    
    marginTop: "20%",
    marginBottom: "15%",
  },

  petPlant: {
    justifyContent: "space-around",
    alignItems: "center",
    
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
      shadowOffset: {
        width: 10,
        height: 15,
      },
      shadowOpacity: 0.08,
      shadowRadius: 10,
    },
  plantText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  imageStyle: {
    marginLeft: "15%",
  },


  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: "5%",
    marginTop: 0,
  },
});

export default HomeScreen;