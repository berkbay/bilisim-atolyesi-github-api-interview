import {Text, TouchableOpacity, StyleSheet} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const GoToRepositoryPage = (props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Repositories',{username: props.username})}>
            <Text>Go toRepositories</Text>
        </TouchableOpacity>
    );
}

export default GoToRepositoryPage;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1
    }
})
