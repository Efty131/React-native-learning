import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Style from '../style/styles';
const styling = () => {
  return (
    <View>
      <Text style={{color: 'green', textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>Inline Styling</Text>
      <Text style={style.Internal}>Internal Styling</Text>
      <Text style={Style.External}>External Styling</Text>
    </View>
  )
}
const style = StyleSheet.create({
    Internal: {
        color: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    }
});
export default styling;