import React from "react";
import { View , Text, StyleSheet} from "react-native";

const RepositoriesScreen = () => {
    return (
        <View>
            <View style={styles.repoContainer}>
                <Text>Hello</Text>
            </View>
            <View style={styles.repoContainer}>
                <Text>Hello</Text>
            </View>
            <View style={styles.repoContainer}>
                <Text>Hello</Text>
            </View>
            <View style={styles.repoContainer}>
                <Text>Hello</Text>
            </View>
        </View>
    );
}

export default RepositoriesScreen;

const styles = StyleSheet.create({
    repoContainer: {
        flex:1,
        height: 100,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 0.4,
    }
})
