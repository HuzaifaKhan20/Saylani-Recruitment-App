import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import Logo from '../Images/Logo.png';
import { StatusBar } from 'expo-status-bar';

const CompanyDashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image source={Logo} style={styles.image} />
            <Button onPress={() => navigation.navigate("Vacancies")} containerStyle={styles.button} type="outline" title="Vacancy List" />
            <Button onPress={() => navigation.navigate("Detail")} containerStyle={styles.button} type="outline" title="Students Profiles" />
            <Button onPress={() => navigation.navigate("Notifications")} containerStyle={styles.button} type="outline" title="Notifications" />
        </View>
    )
}

export default CompanyDashboard;

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
