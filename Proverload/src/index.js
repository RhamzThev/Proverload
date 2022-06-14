import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Provider} from 'react-redux';

import store from './store';
import UserCreation from './UserCreation';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="User Creation"
                        component={UserCreation}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};