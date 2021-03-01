import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { Button, Input } from 'react-native-elements';
import { db } from '../firebase';
import { StatusBar } from 'expo-status-bar';

const Form = ({ navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [Education, setEducation] = useState("");
    const [address, setAddress] = useState("");
    const [Skills, setSkills] = useState("");

    const donate = async () => {
        await db.collection('studentProfiles').add({
            FullName: name,
            phoneNum: phone,
            Education: Education,
            address: address,
            Skills: Skills,
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
                    placeholder="Full Name"
                    onChangeText={(e) => setName(e)}
                    onSubmitEditing={donate}
                    value={name}
                />
                <Picker
                    onValueChange={(e) => setEducation(e)}
                    selectedValue={Education}
                >
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="SSC" value="SSC" />
                    <Picker.Item label="HSC" value="HSC" />
                    <Picker.Item label="Graduation" value="Graduation" />
                    <Picker.Item label="Master" value="Master" />
                    <Picker.Item label="Phd" value="Phd" />
                </Picker>
                <Picker
                    onValueChange={(e) => setSkills(e)}
                    selectedValue={Skills}
                >
                    <Picker.Item label="Skills" value="Skills" />
                    <Picker.Item label="Front-End Developer" value="Front-End-Developer" />
                    <Picker.Item label="Back-End Developer" value="Back-End-Developer" />
                    <Picker.Item label="Full-Stack Developer" value="Full-Stack-Developer" />
               </Picker>
                <Input
                    placeholder="% in Last Education"
                    onChangeText={(e) => setPhone(e)}
                    onSubmitEditing={donate}
                    value={phone}
                />
                <Input
                    placeholder="Address"
                    onChangeText={(e) => setAddress(e)}
                    onSubmitEditing={donate}
                    value={address}
                />
                <Button disabled={!name, !Education, !Skills, !phone, !address} containerStyle={{backgroundColor: "lightgreen"}} onPress={donate} type="outline" title='Post Resume' />
            </View>
        </ScrollView>
    )
}

export default Form;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 100,
        backgroundColor: "white",
        paddingBottom: 215,
        height: "100%",
    },
})

