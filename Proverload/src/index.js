import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserAuth from './UserAuth';
import Main from './Main';

import { Provider } from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
};