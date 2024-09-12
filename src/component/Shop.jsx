import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import item1 from "../assets/img/home/items/item1.png"
// import item2 from "../assets/img/home/items/item2.png"
// import item3 from "../assets/img/home/items/item3.png"
// import item4 from "../assets/img/home/items/item4.png"
// import item5 from "../assets/img/home/items/item5.png"

// import effect1 from "../assets/img/home/effects/effect1.png"
// import effect2 from "../assets/img/home/effects/effect2.png"
// import effect3 from "../assets/img/home/effects/effect3.png"
// import effect4 from "../assets/img/home/effects/effect4.png"
// import effect5 from "../assets/img/home/effects/effect5.png"

// import color1 from "../assets/img/home/bgColor/color1.png"
// import color2 from "../assets/img/home/bgColor/color2.png"
// import color3 from "../assets/img/home/bgColor/color3.png"
// import color4 from "../assets/img/home/bgColor/color4.png"
// import color5 from "../assets/img/home/bgColor/color5.png"

import item from "../assets/img/home/items/item.png"
import effect from "../assets/img/home/effects/effect.png"
import color from "../assets/img/home/bgColor/color.png"


const SectionTitle = ({text}) => {
    return (
      <View style={styles.shop}>
        <Text style={styles.title}>{text}</Text>
        <Text style={{color: "#367B4D"}}>더보기</Text>
      </View>
    )
  }

const Product = ({image, text}) => {
    return (
        <View style={styles.productContainer}>
          <Image source={image} />
          <Text style={styles.productText}>{text}</Text>
        </View>
      )
}

const Shop = () => {
  return (
    <View style={styles.container}>
      <SectionTitle text="인기 상품"/>
      <View style={styles.items}>
        <ScrollView horizontal={true}>
          <Product image={item} text="Mark Smith"/>
          <Product image={item} text="John Shane"/>
          <Product image={item} text="Jane Mate"/>
          <Product image={item} text="Mark Smith"/>
          <Product image={item} text="Mark Smith"/>
        </ScrollView>
      </View>
      <SectionTitle text="배경 효과"/>
        <ScrollView horizontal={true}>
          <Product image={effect} text="Mark Smith"/>
          <Product image={effect} text="John Shane"/>
          <Product image={effect} text="Jane Mate"/>
          <Product image={effect} text="Mark Smith"/>
          <Product image={effect} text="Mark Smith"/>
        </ScrollView>
      <SectionTitle text="배경 색"/>
      <View style={styles.items}>
        <ScrollView horizontal={true}>
          <Product image={color} text="Mark Smith"/>
          <Product image={color} text="John Shane"/>
          <Product image={color} text="Jane Mate"/>
          <Product image={color} text="Mark Smith"/>
          <Product image={color} text="Mark Smith"/>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "10%",
 },

 shop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  items: {
    flexDirection: "row",
    // padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  productText: {
    fontSize: 13,
  },
  productContainer: {
    paddingLeft: 15,
  },
});

export default Shop;