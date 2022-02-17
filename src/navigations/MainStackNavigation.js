import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from "../screens/ProfileScreen";
import RepositoriesScreen from "../screens/RepositoriesScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Profile" component={ProfileScreen} screenOptions={{headerShown:false}}/>
                <Stack.Screen name="Repositories" component={RepositoriesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigation;
