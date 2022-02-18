import {Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";

const GoToRepositoryPage = (props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Repositories',{username: props.props.username})}>
            <Text style={styles.text}>Go To Repositories</Text>
            <AntDesign style={{alignSelf:'center', paddingHorizontal: 5, paddingVertical: 5}} name="right" size={36} color="black" />
        </TouchableOpacity>
    );
}

export default GoToRepositoryPage;

const styles = StyleSheet.create({
    button: {
        flexDirection:'row',
        marginVertical:20,
        marginHorizontal: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFE690'
    },
    text:{
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        fontSize: 36,
        fontWeight: 'bold'
    }
})
