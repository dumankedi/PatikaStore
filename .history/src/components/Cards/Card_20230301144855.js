/* eslint-disable prettier/prettier */
import React from 'react';
import {view, StyleSheet, Image, Text} from 'react-native';

const ShopCard = shop => {
  return (
    <view>
      <Image source={uri: {shop.imgURL}}/>
      <Text>{shop.title}</Text>
      <Text>{shop.price}</Text>
    </view>
  );
};
export default ShopCard;
