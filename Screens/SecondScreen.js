import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';

const SecondScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Signin")} containerStyle={styles.button} type="outline" title="Sign in" />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Create Your Account" />
        </View>
    )
}

export default SecondScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        marginBottom: 70,
        height: 200,
    },
    button: {
        width: 250,
        marginTop: 20,
        backgroundColor: "lightgreen"
    }
})
