import React from 'react';
import { View, Text, Button } from 'react-native';
const header = () => {
  const myName = (name) =>{
        console.warn("Name: ", name);     
  }
  return (
    <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'green', fontSize: 39}}>This Is Header</Text>
        <Button title="Header Button" onPress={ () => myName('Efty')} />
    </View>
  )
}
export default header; 