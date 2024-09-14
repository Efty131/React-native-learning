import { View, Text, Platform, StyleSheet } from 'react-native';
import React from 'react';
// functionality / style etc android or ios a alada korar jonne
//  Platform component use kore
const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{
        Platform.OS === 'ios' ? 'Welcome IOS User!' : 'Welcome Android User!'
        }</Text>
      <Text style={styles.platformText}>{
        Platform.select({
            ios: 'You are using ios device',
            android: 'You are using android device',
            macos: 'You are using MacOS',
        })
        }</Text>
    </View>
  )
};
export default PlatformExample;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.select({
            ios: 'lightblue',
            android: 'lightgreen',
        }),
    },
    welcomeText: {
        fontSize: 24,
        color: Platform.OS === 'ios' ? 'blue' : 'green',
        marginBottom: 20,
    },
    platformText: {
        fontSize: 18,
        color: '#000',
    },
});