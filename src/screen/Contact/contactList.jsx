import { FlatList, Text } from 'react-native';
import React from 'react';
import { users } from './userContactInfo';
import ContactItem from '../../components/contactItem';
import { styles } from '../Contact/style';
// FlatList er moddhe components call korar jonno
// FlatList er data array te thake
const contactList = () => {
    const renderItem = ({item}) => <ContactItem name={item.name} email={item.email} />
  return (
      <FlatList 
      data={users} 
      renderItem={renderItem} 
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.id} 
      ListHeaderComponent={<Text style={styles.heading}>Contacts</Text>} />
  )
}
export default contactList;