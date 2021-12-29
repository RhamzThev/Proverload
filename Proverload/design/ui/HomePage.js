import React, { Component } from 'react';
import { View, Text, Button  } from 'react-native';

function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Page</Text>
            <Button
                title="Create Workout"
                onPress={() => navigation.navigate('Workout')}
            />
        </View>
    );
}

export default HomePage;