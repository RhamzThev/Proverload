import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserAuth from './UserAuth';
import UserAuth from './Use';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="User Authentication"
                    component={UserAuth}
                />
                <Stack.Screen 
                    name="Main"
                    component={Main}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};