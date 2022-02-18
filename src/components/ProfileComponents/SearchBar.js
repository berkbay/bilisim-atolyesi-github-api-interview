import {TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import React, {useCallback, useState} from "react";
import {getUser} from "../../store/actions";
import {useDispatch} from "react-redux";


const SearchBar = () => {

    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch()

    const searchUser = useCallback(() => {
        dispatch(getUser(userInput))
    },[userInput])

    return(
        <View style={{flexDirection: 'row'}}>
            <TextInput
                style={styles.textInput}
                value={userInput}
                onChangeText={value => setUserInput(value)}/>
            <TouchableOpacity onPress={() => searchUser()} style={styles.searchIcon}>
                <FontAwesome style={styles.searchIcon} name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

export  default SearchBar;

const styles = StyleSheet.create({
    searchIcon: {
        marginVertical:10,
        marginHorizontal: 10,
    },
    textInput: {
        flex:1,
        height:30,
        paddingHorizontal: 5,
        paddingVertical:2,
        marginVertical:10,
        marginHorizontal: 10,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#EEEEEE',
        textTransform: 'lowercase'
    }
})
