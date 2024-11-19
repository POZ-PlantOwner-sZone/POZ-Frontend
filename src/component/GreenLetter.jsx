import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import geranium from "../assets/img/geranium.png";

const GreenLetter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={geranium} style={styles.geranium} />
        <Text style={styles.title}>제라늄</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          제라늄은 다양한 색상의 꽃이 사계절 내내 화사하게 피어난다. 추운 겨울 창가에 두고 겉흙이 완전히 말랐을 때 충분히 관수하면 됩니다. 물을 자주 주면 뿌리가 썩을 수 있으니 주의가 필요합니다.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.quote}>
          "새빨간 꽃잎, 원형의 초록 잎사귀, 햇빛을 향해 온 몸을 세우는 꽃, 창가의 제라늄"
        </Text>
        <Text style={styles.author}>나탈리 골드버그</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 26,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 26,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    marginBottom: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 18,
    width: "100%",
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    padding: "3%",
    color: "#333",
    // textAlign: "center",
  },
  quote: {
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
  },
  author: {
    fontSize: 14,
    textAlign: "right",
    color: "#555",
    width: "100%",
  },
  geranium: {
    width: 172,
    height: 159,
    marginBottom: 26,
    alignSelf: "center",
  },
});

export default GreenLetter;
