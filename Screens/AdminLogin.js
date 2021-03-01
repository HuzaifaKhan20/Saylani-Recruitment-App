import React, { useEffect, useState } from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StyleSheet, View, ScrollView } from 'react-native';
import Logo from '../Images/Logo.png';
import { auth } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const AdminLoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const xk = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Admin Dashboard");
            }
        });

        return xk;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error));
    }

    return (
        <ScrollView>
        <View style={styles.container} behavior="padding">

            <Image source={Logo} style={styles.image} />

            <View style={styles.input}>
                <Input placeholder="Email" value={email} type="email" onChangeText={(e) => setEmail(e)} />
                <Input placeholder="Password"  value={password} secureTextEntry type="password" onChangeText={(e) => setPassword(e)} onSubmitEditing={signIn} />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Sign in" />

            <StatusBar style="auto" />
            
        </View>
        </ScrollView>
    )
}

export default AdminLoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 275,
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    input: {
        width: 300,
    },
});