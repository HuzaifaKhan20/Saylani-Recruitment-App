import React from 'react';
import { ListItem } from 'react-native-elements';

const NotificationsList = ({ id, CompanyName, CompanyAddress }) => {
    return (
        <ListItem key={id} onPress={() => (id, CompanyName, CompanyAddress)} bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Name: {CompanyName}{'\n'}
                    Message: {CompanyAddress}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default NotificationsList;