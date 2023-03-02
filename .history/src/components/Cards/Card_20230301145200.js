/* eslint-disable prettier/prettier */
import React from 'react';
import {view, StyleSheet, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = shop => {
  return (
    <view>
      <Image source={{uri: shop.imgURL}} style={styles.image_stil} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
    </view>
  );
};
export default ShopCard;
