/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image : {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
    },
});
