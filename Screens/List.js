import React from 'react';
import { ListItem } from 'react-native-elements';

const List = ({ id, phoneNum, FullName, Education, address, Skills }) => {
    return (
        <ListItem key={id} onPress={() => (id, phoneNum, FullName, Education, address, Skills)} bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Name: {FullName}{'\n'}
                    Education: {Education}{'\n'}
                    Percentage: {phoneNum}{' % \n'}
                    Skills: {Skills}{'\n'}
                    Address: {address}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default List;