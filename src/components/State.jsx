import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
const State = () => {
    const [name, setName] = useState('Bolda Tahomid');
    const hadlePress = () =>{
        setName('Bainna Baccu');
    }
  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'green', fontSize: 39}}>This is {name}</Text>
      <Button title="Press here" onPress={hadlePress} />
    </View>
  )
}
export default State;