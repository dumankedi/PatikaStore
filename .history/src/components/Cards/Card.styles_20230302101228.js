/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 10,
        margin: 10,
    },
    image : {
        //width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
    },
});
