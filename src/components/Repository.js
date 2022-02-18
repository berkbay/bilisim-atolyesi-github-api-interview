import {Text, View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const Repository = () => {
    const repos = useSelector((state) => state.repos)
    return (
        <ScrollView>
            {repos.length ? repos.map((item) =>
                <View key={item.id} style={styles.repoContainer}>
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
        </ScrollView>
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

