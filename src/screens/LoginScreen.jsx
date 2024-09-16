import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";
import commonStyles from "../../commonStyle";
import PWIcon from "../assets/icon/PWIcon.png"
import facebook from "../assets/icon/facebook.png"
import google from "../assets/icon/google.png"

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isButtonClick = (navigation) => {
    setUsername("");
    setPassword("");
    Alert.alert("로그인에 성공하였습니다.")
    navigation.navigate("RegisterPlant")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POZ</Text>
      <View style={styles.textSection}>
        {/* 텍스트 박스 */}
        <View style={styles.textBG}>
          <View style={styles.inputSection}>
            <Text style={styles.textHolder}>ID</Text>
            <TextInput style={styles.textInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
        </View>
        {/* 텍스트 박스 */}
        <View style={styles.textBG}>
          <View style={styles.inputSection}>
            <Text style={styles.textHolder}>PW</Text>
            <TextInput style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <Image source={PWIcon} style={styles.PWIcon}/>
        </View>
        <View style={styles.findPW}>
          <Text style={styles.findPWText}>비밀번호를 잊어버리셨나요?</Text>
        </View>
      </View>

      {/* 로그인 */}
      <TouchableOpacity style={commonStyles.button} onPress={() => isButtonClick(navigation)}>
        <Text style={commonStyles.buttonText}>로그인</Text>
      </TouchableOpacity>
      
      {/* 간편 로그인 */}
      <View style={styles.socialSection}>
        <View style={styles.socialHeader}>
          <View style={styles.loginLine}></View>
          <Text style={styles.loginText}>간편로그인</Text>
          <View style={styles.loginLine}></View>
        </View>
        <View style={styles.loginSection}>
          {/* 구글 로그인 섹션 */}
          <View style={styles.loginMethod}>
            <Image source={google} style={styles.icon} />
            <Text style={styles.loginMethodText}>구글 로그인</Text>
          </View>
          {/* 페이스북 로그인 섹션 */}
          <View style={styles.loginMethod}>
            <Image source={facebook} style={styles.icon} />
            <Text style={styles.loginMethodText}>페이스북 로그인</Text>
          </View>
        </View>
      </View>

      {/* 회원가입 */}
      <Text style={styles.signupText}>회원가입</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#367B4D',
    padding: "5%",
  },
  textSection: {
    width: "85%",
  },
  textBG: {
    // backgroundColor: "#F1F1F1",
    backgroundColor: "lightgray",
    borderRadius: 10,
    flexDirection: "row",
    padding: "4%",
    margin: "3%",

    justifyContent: "space-between",
  },
  textHolder: {
    // color: "#BCBCBC",
    color: "gray",
  },
  textInput: {
    paddingLeft: "20%",
    fontSize: 14,
  },
  inputSection: {
    flexDirection: "row",
  },
  PWIcon: {
    width: 20,
    height: 20,
  },
  findPW: {
    alignItems: "flex-end",
  },
  findPWText:{
    color: "#367B4D",
    padding: "2%",
  },



  socialSection: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    
    marginTop: "10%",
    marginBottom: "8%",
  },
  socialHeader: {
    alignItems: "center",
    flexDirection: "row",
  },
  loginText: {
    fontSize: 16,
    paddingLeft: 23,
    paddingRight: 23,
  },
  loginLine: {
    borderWidth: 1,
    borderColor: `rgba(170, 172, 165, 0.20)`,
    width: "34%",
  },
  loginSection: {
    width: "100%",
    flexDirection: "row",
    marginTop: "5%",
    justifyContent: "space-between",
  },
  loginMethod: {
    width: "45%",
    justifyContent: "space-around",
    alignItems: "center",
    
    flexDirection: "row",
    borderWidth: 1,
    borderColor: `rgba(170, 172, 165, 0.20)`,
    padding: "3%",
    borderRadius: 10,
  },
  loginMethodText: {
    
  },
  signupText: {
    fontSize: 16,
  },
});

export default LoginScreen;