import React from "react";
import {View, SafeAreaView, ScrollView, Text,} from "react-native";
import SearchBar from "../components/ProfileComponents/SearchBar";

import { useSelector} from "react-redux";
import User from "../components/ProfileComponents/User";

const ProfileScreen = () => {

    const errorMessage = useSelector((state) => state.errorMessage)

    return (
        <SafeAreaView>
            <ScrollView>
                <SearchBar/>
                {errorMessage ? <View><Text>{errorMessage}</Text></View> : (<User/>)}
            </ScrollView>
        </SafeAreaView>
    );
}


export default ProfileScreen;
