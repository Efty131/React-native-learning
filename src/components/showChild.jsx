import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
const showChild = () => {
    useEffect(() => {
        // console.log('Child component mount');
        return() => {
            console.log('Child component unmount');
    };
    }, []);
  return (
    <View>
    <Text style={{fontSize: 30}}>Child Component</Text>
  </View>
  )
}
export default showChild;