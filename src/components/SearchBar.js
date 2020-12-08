import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder='Search'
                style={styles.inputStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE', 
        height: 50, 
        borderRadius: 5, 
        margin: 15, 
        flexDirection: 'row'
    }, 
    inputStyle: {
        flex: 1, 
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35, 
        alignSelf: 'center',
        marginHorizontal: 7
    }
})

export default SearchBar