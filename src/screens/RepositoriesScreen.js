import React, {useEffect} from "react";
import { View} from "react-native";
import Repository from "../components/Repository";
import {useDispatch} from "react-redux";
import {getRepos} from "../store/actions";
import {useRoute} from "@react-navigation/native";

const RepositoriesScreen = () => {

    const dispatch = useDispatch()
    const route = useRoute()
    const {username} = route.params

    useEffect(() => {
        dispatch(getRepos(username))
    },[])

    return (
        <View>
            <Repository/>
        </View>
    );
}

export default RepositoriesScreen;

