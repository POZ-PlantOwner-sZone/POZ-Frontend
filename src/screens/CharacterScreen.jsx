import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import backgroundImage from "../assets/img/characterBackground.png"
import character from "../assets/img/character/character.png"
import profileImage from "../assets/img/profileImage.png"

const CharacterScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}/>        
        <Image source={character} style={styles.character}/>
        <View style={styles.modal}>
          <View style={styles.profile}>
              <Image source={profileImage} />
              <Text style={styles.profileName}>씩씩이</Text>
          </View>
          <View style={styles.chatBackground}>
            <View>
              <Text style={styles.chatText}>오늘 날씨도 좋은데 창문 열고 바깥 공기 좀 마실까?</Text>
            </View>
            <View>
              <Text style={styles.date}>09:41 AM</Text>
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%", ///////
    padding: "5%",
  },
  character: {
    marginTop: "20%",
    marginLeft: "30%",
  },
  chatBackground: {
    backgroundColor: "#F1F1F1",
    padding: "10%",

    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  profileName: {
    padding: "4%",
    fontSize: 17,
    fontWeight: "bold",
  },
  profile: {
    flexDirection: "row",
    padding: "3%",
  },
  chatText: {
    fontSize: 20,
  },
  date: {
    padding: "2%",
    fontSize: 15,
    textAlign: "right",
    color: "gray",
  }
});

export default CharacterScreen;