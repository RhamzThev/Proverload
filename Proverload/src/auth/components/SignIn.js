import React, { useState } from 'react'
import { View, Text, TextInput, Button, NativeModules } from 'react-native';

const { TestModule } = NativeModules;

export default function SignIn({ handleLogIn, navigation }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Log In</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                onPress={() => handleLogIn(username, password)}
                title="Log In"
            />
            <Text>No account?
                <Text style={{color: 'blue'}}
                    onPress={() => navigation.navigate("Sign Up")}>
                     Create one!
                </Text>
            </Text>
        </View>
    );
};