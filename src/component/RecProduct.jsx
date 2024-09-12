import React, { useRef, useEffect } from "react";
import { TouchableOpacity, Dimensions, View, Text, StyleSheet, Image, FlatList } from "react-native";
import RecProductDummy from "./RecProductDummy"

const Product = ({text1, text2, image, color}) => {
    return (
        <View style={[styles.recProduct, { backgroundColor: color }]}>
      <View>
        <Text style={styles.recText}>{text1}</Text>
        <Text style={[styles.recText, { fontSize: 17 }]}>{text2}</Text>
      </View>
      <Image source={image}/>
    </View>
      )
}

const RecProduct = () => {
    const flatListRef = useRef(null);
  
    const data = RecProductDummy.data;
    const initialIndex = Math.floor(data.length / 2);
  
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: 300,
    height: 100,

    padding: 20,
    margin: 10,
    marginTop: 0,
    marginBottom: 30,

    borderRadius: 13,
  },

 recText: {
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 20,
  },
});

export default RecProduct;