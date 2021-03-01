import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .catch(error => alert(error.message))
                navigation.navigate("Detail")
    }

    return (
        <ScrollView>
            <View behavior="padding" style={styles.container}>

                <Text h3 style={{ marginBottom: 50 }}>Create Account</Text>

                <View style={styles.inputContainer}>
                    <Input placeholder="Enter Full Name" type="text" value={name} onChangeText={(text) => setName(text)} />
                    <Input placeholder="Enter Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                    <Input placeholder="Enter Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
                </View>

                <Button type="outline" containerStyle={styles.button} onPress={register} title="Register" />
                <View style={{ height: 175 }} />

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
        backgroundColor: "white",
    },
    button: {
        width: 290,
        marginTop: 10,
        backgroundColor: "#000",
    },
    inputContainer: {
        width: 300,
    }
});
