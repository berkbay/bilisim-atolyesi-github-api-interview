import {Image, Text, View, StyleSheet} from "react-native";
import GoToRepositoryPage from "./GoToRepoButton";
import React from "react";
import {useSelector} from "react-redux";


const User = () => {

    const user = useSelector((state) => state.user)

    return(
        <View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.profileImage}>
                    <Image source={{uri: user?.avatar_url}} style={styles.image} resizeMode="center"/>
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={{fontWeight: "200", fontSize: 36}}>{user.name}</Text>
                <Text style={{color: "#AEB5BC", fontSize: 14}}>{user.location}</Text>
                <Text style={{color: "#AEB5BC", fontSize: 14}}>{user.company}</Text>
            </View>
            <View style={styles.userStatsContainer}>
                <View style={styles.statsBox}>
                    <Text style={{fontSize: 24}}>{user.followers}</Text>
                    <Text style={styles.statsText}>Followers</Text>
                </View>
                <View style={[styles.statsBox, {
                    borderColor: '#DFD8C8',
                    borderLeftWidth: 1,
                    borderRightWidth: 1
                }]}>
                    <Text style={{fontSize: 24}}>{user.following}</Text>
                    <Text style={styles.statsText}>Following</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={{fontSize: 24}}>{user.public_repos}</Text>
                    <Text style={styles.statsText}>Repositories</Text>
                </View>
            </View>
            <GoToRepositoryPage props={{username: user.login}}/>
        </View>
    );
}

export default User;

const styles = StyleSheet.create({
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    userInfoContainer: {
        alignSelf:"center",
        alignItems:"center",
        marginTop: 16,
    },
    userStatsContainer: {
        flexDirection:"row",
        alignSelf:"center",
        marginTop: 32,
    },
    statsBox: {
        alignItems:'center',
        flex:1
    },
    statsText: {
        fontSize:12,
        color: '#AEB5BC',
        textTransform: 'uppercase',
        fontWeight: "500"
    }
})
