import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, Alert, Image } from "react-native";
import RecordPlant from "../component/RecordPlant";
import RecPlant from "../component/RecPlant";

const LikeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>나의 식물 기록</Text>
        </View>
        <RecordPlant />
        <View style={styles.recPlant}>
          <Text style={[{ fontWeight: "bold" }]}> 오늘의 식물</Text>
          <Text style={[{ color: "#367B4D" }]}>더보기</Text>
        </View>
        <RecPlant />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: "5%",
    marginTop: "20%",
  },
  recPlant: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "10%",
    marginBottom: "5%",
  }
  
});

export default LikeScreen;