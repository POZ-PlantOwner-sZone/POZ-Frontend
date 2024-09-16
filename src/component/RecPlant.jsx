import React, { useRef, useEffect } from "react";
import { TouchableOpacity, Dimensions, View, Text, StyleSheet, Image, FlatList } from "react-native";
import RecPlantDummy from "./RecPlantDummy"
import star from "../assets/img/recommentPlant/star.png"

const Product = ({text1, text2, image}) => {
    return (
    <View style={[styles.recProduct]}>
        <Image source={image}/>
        <Text style={styles.recText1}>{text1}</Text>
        <View style={styles.recText2Container}>
            <Image source={star} style={styles.smallImage}/>
            <Text style={styles.recText2}>{text2}</Text>
        </View>
    </View>
      )
}

const RecPlant = () => {
    const flatListRef = useRef(null);
  
    const data = RecPlantDummy.data;
    const initialIndex = 0;
  
    useEffect(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: initialIndex, animated: false });
      }
    }, [data]);
  
    return (
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        keyExtractor={(item, index) => item.text1 + index}
        renderItem={({ item }) => (
          <Product text1={item.text1} text2={item.text2} image={item.image} color={item.color} />
        )}
        getItemLayout={(data, index) => ({
          length: styles.recProduct.width + 20,
          offset: (styles.recProduct.width + 20) * index,
          index,
        })}
        initialScrollIndex={initialIndex}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={styles.recProduct.width + 45}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: (styles.recProduct.width - 225) / 2 }}
      />
    );
  };

const styles = StyleSheet.create({
  recProduct: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",

    width: 270,
    height: 300,

    padding: 20,
    margin: 10,
    marginTop: 0,
    marginBottom: 30,

    borderRadius: 13,
  },

  recText1: {
    fontSize: 15,
    textAlign: "left",
    alignSelf: "flex-start",
  },

  recText2Container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },

  smallImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  recText2: {
    fontSize: 15,
    textAlign: "right",
  },
});

export default RecPlant;