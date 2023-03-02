/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({haber}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: haber.imgURL}} style={styles.image_style} />
      <Text style={styles.title}>{haber.title}</Text>
      <Text style={styles.price}>{haber.price}</Text>
      <Text style={styles.stock}>{haber.inStock}</Text>
    </View>
  );
};
export default ShopCard;
