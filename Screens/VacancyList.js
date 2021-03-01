import React from 'react';
import { ListItem } from 'react-native-elements';

const VacancyList = ({ id, CompanyPhone, CompanyName, PostName, CompanyAddress, Salary }) => {
    return (
        <ListItem key={id} onPress={() => (id, CompanyPhone, CompanyName, PostName, CompanyAddress, Salary)} bottomDivider>
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                    Company Name: {CompanyName}{'\n'}
                    Post Name: {PostName}{'\n'}
                    Salary: {Salary}{'\n'}
                    Phone Number: {CompanyPhone}{'\n'}
                    Company Address: {CompanyAddress}
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    )
}

export default VacancyList;