import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './auth';
import Main from './main';

import { Provider, connect } from 'react-redux';
import store from './store';

function LoggingIn() {
    const token = useSelector(state => state.auth.token)
    return (
        token === null ? <Auth /> : <Main />
    );
}

export default function App() {


    return (
        <Provider store={store}>
            <NavigationContainer>
                <LoggingIn/>
            </NavigationContainer>
        </Provider>
    );
};