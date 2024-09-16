import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";

import arrow from "../assets/icon/my/arrow.png"
import edit2 from "../assets/icon/my/edit2.png"
import lock from "../assets/icon/my/lock.png"
import card from "../assets/icon/my/card.png"
import bell from "../assets/icon/my/bell.png"
import eye from "../assets/icon/my/eye.png"
import shield from "../assets/icon/my/shield.png"
import note from "../assets/icon/my/note.png"

import logout from "../assets/icon/my/logout.png"

const ProfileDetailSection = ({ icon, title }) => {
    return (
      <View style={styles.profile}>
        <View style={styles.iconAndTitleContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={arrow} style={styles.arrow} />
      </View>
    );
  };

const ProfileDetail = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <ProfileDetailSection icon={edit2} title="프로필 수정"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={lock} title="비밀번호 변경"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={card} title="결제방식"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={bell} title="알림"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={eye} title="세부 계획"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={shield} title="개인정보 정책"/>
        <View style={styles.line} />
        <ProfileDetailSection icon={note} title="이용약관"/>

        <View style={styles.button}>
            <Image source={logout} />
            <Text style={styles.logout}>로그아웃</Text>
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

  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingVertical: 18,
  },
  iconAndTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },

  title: {
    fontSize: 15,
  },

  line: {
    width: "90%",
    height: 1,
    // backgroundColor: "#959C9A1A",
    backgroundColor: "lightgray",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#367B4D",
    width: "90%",

    padding: "3%",
    margin: "5%",

    borderRadius: 10,
  },
  logout: {
    color: "white",
    marginLeft: 10,
  },
  
});

export default ProfileDetail;