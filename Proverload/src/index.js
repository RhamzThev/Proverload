import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserCreation from './UserCreation';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="User Creation"
                    component={UserCreation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};