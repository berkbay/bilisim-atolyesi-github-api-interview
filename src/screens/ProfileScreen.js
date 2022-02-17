import React, {useState} from "react";
import {View, SafeAreaView, ScrollView, Image, StyleSheet, TextInput, Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";



const ProfileScreen = () => {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [publicRepos, setPublicRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null)
    const [repos, setRepos] = useState('');

    const setData = ({name, login, followers, following, public_repos, avatar_url, location, company}) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setPublicRepos(public_repos);
        setAvatar(avatar_url);
        setLocation(location);
        setCompany(company)
    }

    const handleSearch = (username) => {
        setUserInput(username)
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TextInput style={styles.textInput} onChangeText={handleSearch}>
                        <FontAwesome name="search" size={24} color="black" style={{marginVertical:10, marginLeft:10}} />
                    </TextInput>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../assets/icon.png')} style={styles.image} resizeMode="center"/>
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <Text style={{fontWeight: "200", fontSize:36}}>Berk</Text>
                    <Text style={{color: "#AEB5BC", fontSize:14}}>Country</Text>
                </View>
                <View style={styles.userStatsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={{fontSize: 24}}>483</Text>
                        <Text style={styles.statsText}>483</Text>
                    </View>
                    <View style={[styles.statsBox, {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth:1}]}>
                        <Text style={{fontSize: 24}}>483</Text>
                        <Text style={styles.statsText}>483</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={{fontSize: 24}}>483</Text>
                        <Text style={styles.statsText}>483</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    searchIcon: {
        marginVertical:10,
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
        backgroundColor:'#EEEEEE'
    },
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
    },
})
