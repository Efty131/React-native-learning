import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
const child = (prop) => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'green', fontSize: 39}}>child</Text>
      <Text style={style.text}>{prop.data}</Text>
      <Text style={style.text}>{prop.item}</Text>
    </View>
  )
}
const style = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green',
        fontSize: 32,
    }
})
export default child