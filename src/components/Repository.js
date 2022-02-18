import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const Repository = () => {
    const repos = useSelector((state) => state.repos)
    console.log(repos)
    return (
        <View>
            {repos.length ? repos.map((item) =>
                <View style={styles.repoContainer}>
                    <Text>{item.name}</Text>
                    <Text>{item.created_at}</Text>
                    <Text>{item.language}</Text>
                </View>
            ) : (
                <View>
                    <Text>NO REPOS</Text>
                </View>
            )
            }
        </View>
    );
}

export default Repository;

const styles = StyleSheet.create({
    repoContainer: {
        height: 100,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
    }
})

