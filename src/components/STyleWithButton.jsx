import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
const STyleWithButton = () => {
  return (
    <View>
{/* TouchableOpacity r motoi button but onPress chara press kora jay na and opacity thake na */}
        <Button title='Basic Button' color={'red'} />
      <TouchableHighlight style={styles.button} underlayColor={'#3A1078'} onPress={() => {
        console.log('Touchable Highlight');
      }}>
        <Text style={styles.buttonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
    button : {
        margin: 20,
        backgroundColor : '#4E31AA',
        padding: 20,
        borderRadius: 25,
        elevation: 5, 
        //elevation Property ta only android a use kora jay
    },
    buttonText : {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default STyleWithButton;