import React, { useState } from 'react'
import { View, Text } from 'react-native';

function listedSets(element) {
    return(
        element.exercises.map(exercise => {
            
        })
    )
}

export default function Workout(props) {

    console.log(props.elements)

    return(
        <View>
            <Text>Workout Page</Text>
        </View>
    );
};