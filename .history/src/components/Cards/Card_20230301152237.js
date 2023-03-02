/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({shop}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: shop.imageUrl}} style={styles.image_style} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.description}</Text>
      <Text style={styles.stock}>{shop.author}</Text>
    </View>
  );
};
export default ShopCard;
