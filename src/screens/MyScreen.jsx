import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import profileImage from "../assets/img/profile/profileImage.png"
import edit1 from "../assets/icon/my/edit1.png"
import ProfileDetail from "../component/ProfileDetail";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image source={profileImage} />
      <View style={styles.profileSection}>
        <Text style={styles.name}>자라나라잎사귀사귀</Text>
        <Text style={styles.email}>ejleee@sookmyung.ac.kr</Text>
      </View>
      <Image source={edit1} />
    </View>
  )
}

const MyScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Profile />
      </View>
      <ProfileDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subcontainer: {
    backgroundColor: "#367B4D",
    width: "100%",
    height: 220,
    borderRadius: 20,
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
    flexDirection: "row",
  },

  profileSection: {
    marginLeft: "5%",
    marginRight: "7%",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  email: {
    fontSize: 15,
    color: "white",
  },
  
});

export default MyScreen;