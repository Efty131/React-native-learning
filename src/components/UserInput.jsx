import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const UserInput = () => {

    const [userName, setUserName] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>inputText</Text>
      <Text style={{fontSize: 30}}>{userName}</Text>
      <TextInput style={{borderColor: 'green', borderWidth: 2, fontSize: 30, margin: 10}} value={userName} placeholder='Enter your text' onChangeText={(value) => setUserName(value)} />
        <Button title='Clear' onPress={() => setUserName('')} />
    </View>
  )
}

export default UserInput;