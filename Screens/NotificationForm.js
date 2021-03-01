import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const NotificationsForm = ({ navigation }) => {
    const [CompanyName, setCompanyName] = useState("");
    const [CompanyAddress, setCompanyAddress] = useState("");

    const donate = async () => {
        await db.collection('Notifications').add({
            CompanyName: CompanyName,
            CompanyAddress: CompanyAddress,
        }).then(() => {
            navigation.goBack();
        })
            .catch((error) => alert(error));
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Input
                    placeholder="Your Name"
                    onChangeText={(e) => setCompanyName(e)}
                    onSubmitEditing={donate}
                    value={CompanyName}
                />
               
                <Input
                    placeholder="Your Message..."
                    onChangeText={(e) => setCompanyAddress(e)}
                    onSubmitEditing={donate}
                    value={CompanyAddress}
                />
                <Button disabled={!CompanyName, !CompanyAddress} containerStyle={{backgroundColor: "lightgreen"}} onPress={donate} type="outline" title='Post Notification' />
            </View>
        </ScrollView>
    )
}

export default NotificationsForm;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 100,
        backgroundColor: "white",
        paddingBottom: 215,
        height: "100%",
    },
})

