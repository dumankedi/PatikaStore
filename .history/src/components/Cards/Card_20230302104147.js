/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({shop}) => {

  return (
    <View style={styles.container}>
      <Image source={{uri: shop.imgURL}} style={styles.image} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
      {shop.inStock ? ' ' : 'STOK YOK' }
    </View>
  );
};
export default ShopCard;
