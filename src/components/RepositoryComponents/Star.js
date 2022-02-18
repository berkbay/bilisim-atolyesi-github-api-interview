import React, {useState} from 'react';
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Star = () => {
    const [stared, setStared] = useState(false)

    return (
        <TouchableOpacity onPress={ () => setStared(!stared)}>
            <Ionicons name={stared ? 'ios-star' : 'ios-star-outline'} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default Star;
