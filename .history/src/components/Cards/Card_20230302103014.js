/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.styles';

const ShopCard = ({shop}) => {

  if (shop.stock==true) {
    return (
      <View style={styles.container}>
      <Image source={{uri: shop.imgURL}} style={styles.image} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
      <Text style={styles.stock} >Stokta Yok</Text>
    </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
      <Image source={{uri: shop.imgURL}} style={styles.image} />
      <Text style={styles.title}>{shop.title}</Text>
      <Text style={styles.price}>{shop.price}</Text>
    </View>
    );
  }
};
export default ShopCard;
