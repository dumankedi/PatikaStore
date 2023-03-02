/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({shop}) => {

  if(shop.inStock==true) {
    stock.visibiler=true;  
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: shop.imgURL}} style={styles.image} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
      <Text id={{stock}}  >Stokta yok</Text>
    </View>
  );
};
export default ShopCard;
