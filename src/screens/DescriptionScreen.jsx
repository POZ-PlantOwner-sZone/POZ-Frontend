import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert, Image } from "react-native";

import explainPlant from "../assets/img/like/explainPlant.png"
import round from "../assets/img/like/round.png"
import clock from "../assets/img/like/clock.png"
import star from "../assets/img/recommendPlant/star.png"

const Plant = ({text, image}) => {
    return (
    <View>
        <Image source={image}/>
        <Text style={styles.plantText}>{text}</Text>
    </View>
    )
}

const TimeAndStar = ({image, text}) => {
    return (
        <View style={styles.time}>
        <Image source={image} />
        <Text>{text}</Text>
      </View>
    )
}

const Button = ({text}) => {
    return (
    <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
    )
}

const DescriptionScreen = ({ navigation, route }) => {
  const { name, image } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Plant text="금전화" image={image}/>
        <Image source={round} />
        <Plant text={name} image={explainPlant}/>
      </View>
      <Text>설명</Text>
      <Text>이 화분은 영국에서 태어나 한국으로 수출되어 우리에게 왔으며 어쩌구 저쩌구 쌸라쌸라
        고온다습한 환경을 싫어하며 건조한 환경을 유지시켜주는 게 중요하므로
        물을 적당히 줘야 한다. 어쩌구 저쩌구 이러저러해서 잘 관리해서 잘 기르길 바란다.
        특히 고온다습한 우리나라 여름 환경에서 쉽게 죽으므로 특별히 온습도 관리에 신경써야... 더보기
    </Text>
    <View>
      <TimeAndStar image={clock} text="6 개월"/>
      <TimeAndStar image={star} text="4.8"/>
    </View>
        <Button text='성장일지 직접 기록하기' />
        <Button text='AI 진단 기록 직접 확인하기' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flexDirection: "row",
  },
  time: {
    flexDirection: "row",
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
  buttonText: {
    color: "white",
    marginLeft: 10,
  },
});

export default DescriptionScreen;