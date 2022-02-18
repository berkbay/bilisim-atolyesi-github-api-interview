import React from 'react';
import { Share, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShareUrl = (props) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: props.url
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <TouchableOpacity style={{marginHorizontal: 5}} onPress={onShare}>
            <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
    );
};

export default ShareUrl;
