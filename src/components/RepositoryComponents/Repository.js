import {Text, View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import {useSelector} from "react-redux";
import ShareUrl from "./Share";
import Star from "./Star";

const Repository = () => {
    const repos = useSelector((state) => state.repos)
    return (
        <ScrollView>
            {repos.length ? repos.map((item) =>
                <View key={item.id} style={styles.repoContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Repository Name:</Text>
                        <Text> {item.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Repository Language:</Text>
                        <Text> {item.language}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>Created Time:</Text>
                        <Text> {item.created_at}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Star/>
                        <ShareUrl url={item.url}/>
                    </View>
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
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
    }
})

