import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import State from './src/components/State';
const App = () => {
  return (
    <View>
      <Text style={textStyle.text2}>Efty</Text>
      <State />
    </View>
  )
}
const textStyle = StyleSheet.create({
  text2: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
  },
})
export default App;