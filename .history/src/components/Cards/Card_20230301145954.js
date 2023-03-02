/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({shop}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: shop.imgURL}} style={styles.image_stil} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
      <Text style={styles.stock}>{shop.inStock}</Text>
    </View>
  );
};
export default ShopCard;
