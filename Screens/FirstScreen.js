import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native-reanimated';

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Admin Sign in")} containerStyle={styles.button} type="outline" title="Sign in as Admin" />
            <Button onPress={() => navigation.navigate("Company Signin")} containerStyle={styles.button} type="outline" title="Sign in as Company" />
            <Button onPress={() => navigation.navigate("Student Signin")} containerStyle={styles.button} type="outline" title="Sign in as Student" />
        </View>
    )
}

export default FirstScreen;

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
        backgroundColor: "lightgreen",
        
    },
    
})
