/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5C5C5',
        padding: 10,
        margin: 10,
    },
    image : {
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
        color: 'black',
    },
    price: {
        marginTop: 5,
    },
});
