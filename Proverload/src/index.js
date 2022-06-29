import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import UserAuth from './UserAuth';
import Main from './Main';

import { Provider, connect } from 'react-redux';
import store from './store';

function LoggingIn() {
    const token = useSelector(state => state.user.token)
    return (
        token === null ? <UserAuth /> : <Main />
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