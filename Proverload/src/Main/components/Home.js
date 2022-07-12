import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export default function Home({name, navigation}) {

    return (
        <View>
            <Text>{name}</Text>
            <Button
                onPress={() => navigation.navigate("Fitness")}
                title="Workout"
            />
        </View>
    );
};