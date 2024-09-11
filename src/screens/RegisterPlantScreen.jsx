import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Image } from "react-native";
import registerButton from "../assets/icon/registerIcon.png"

const RegisterPlantScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <View style={styles.textContent}>
            <View style={styles.detailText}>
                <Text style={styles.text}>안녕하세요, 식물 주치의 POZ입니다.</Text>
                <Text style={styles.text}> 당신의 식물을 등록해 주세요.</Text>
            </View>
            <TextInput style={styles.textInput}
                placeholder="식물 이름을 입력해 주세요."
            />
        </View>
        <View style={styles.registerContent}>
            <TouchableOpacity style={styles.iconSection}>
                <Image source={registerButton} style={styles.icon}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.laterRegister} onPress={() => navigation.navigate("HomeTab")}>
            <Text style={styles.laterRegisterText}>나중에 등록하기</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailText: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#B9B9B9",
    borderRadius: 5,
    
    fontSize: 14,
    padding: "2%",
    marginTop: "10%",
  },
  textContent: {
    width: "70%",
    margin: "5%",
  },
  registerContent: {
    marginTop: "5%",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  laterRegister: {
    textAlign: "right",
  },
  laterRegisterText: {
    color: "#B9B9B9"
  },
  iconSection: {
    margin: "4%",
  },
});

export default RegisterPlantScreen;