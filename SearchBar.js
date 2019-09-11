import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange}) =>{
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                autoCorrect = {false}
                autoCapitalize = 'none'
                style={styles.inputStyle}
                placeholder = 'Search'
                value = {term}
                onChangeText = {newTerm => onTermChange(newTerm)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        marginTop : 10,
        backgroundColor :  "#F0EEEE",
        height : 50,
        borderRadius : 5,
        marginHorizontal : 15,
        flexDirection : 'row',
    },
    inputStyle : {
        //borderColor : 'black',
        //borderWidth : 1,
        flex : 1,
        fontSize : 18
        
    },
    iconStyle : {
        alignSelf : 'center',
        fontSize : 35,
        marginHorizontal : 15,
    }

});

export default SearchBar;