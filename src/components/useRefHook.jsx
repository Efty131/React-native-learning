import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
// useRef hook use kore kono kisu manipulate kori tokhon amader component 
// re render hoy na. Tai useRef use hoy jate instant changes hoye jay
const useRefHook = () => {
    const myRef = useRef();
    const handleRef = () => {
        // myRef.current.setNativeProps({
        //     text: 'Efty',
        //     style: { color: 'white', backgroundColor: 'crimson' },
        // });
        myRef.current.focus();
        // button a press korley TextInput er placeholder a cursor blink korbo
    };
  return (
    <View style={styles.container}>
      <TextInput 
      ref={myRef}
    //    akhon ay TextInput er sob kisu myRef a aya porse.Ahon ja iccha change kora jaybo
      placeholder='Enter Your Text' 
      placeholderTextColor={'#999'} 
      style={styles.input} 
       /> 
       <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
       </TouchableOpacity>
    </View>
  )
}

export default useRefHook;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007Bff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});