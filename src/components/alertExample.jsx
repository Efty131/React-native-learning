import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
// Modal er basic kam kore alert diya
const showAlert = () => {
    Alert.alert(
        'Alert Title',
        'Alert Message',
        [
            {
                text : 'Cancel',
                onPress : () => console.log('Cancel'),
                style : 'cancel',
            },
            {
                text: 'OK',
                onPress : () => console.log('OK'),
            },
        ],
        { cancelable: false }
    );
};
const AlertExample = () => {
  return (
    <View>
      <Text style={{fontSize: 25}}>Alert Example</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};
export default AlertExample;