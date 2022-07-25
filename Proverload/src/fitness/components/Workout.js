import React, { useState } from 'react'
import { View, Text } from 'react-native';

function ListedSets({element}) {
    return(
        element.exercises.map(exercise => {
            return (
                <View key={exercise.id}>
                    <Text>{exercise.name} for {exercise.sets} x {exercise.reps}</Text>
                </View>
            ) 
        })
    )
}

export default function Workout(props) {

    return(
        <View>
            {props.elements.map(element => {
                return <ListedSets key={element.id} element={element}/>
            })}
        </View>
    );
};