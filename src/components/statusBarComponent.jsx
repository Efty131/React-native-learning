import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
// Mobile er upore jey time, wifi,network,battery etc icon thake oitai status bar
const statusBarComponent = () => {
  return (
    <View style={Styles.container}>
        <StatusBar 
        backgroundColor="rgba(0,0,0,0.2)" barStyle={'light-content'} hidden={false} translucent={true} />
      <Text style={Styles.text}>statusBar</Text>
    </View>
  )
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#6200fe',
    },
    text: {
        color: 'red',
        textAlign: 'center',
        fontSize: 24,
    },
})

export default statusBarComponent;