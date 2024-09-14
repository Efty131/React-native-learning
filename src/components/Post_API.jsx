import { View, Text, TextInput, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
const Post_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' });
    const handleInput = (field, value) => {
        if (field === 'id') {
            setFormData({ ...formData, [field]: parseInt(value) || '' }); // Ensure id is a number
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://first-server-for-react-native.onrender.com/users', formData);
            Alert.alert('Success!', 'Data Submitted Successfully');
            console.log(response.data);
            setFormData({ id: '', name: '', email: '' });
        } catch (error) {
            Alert.alert('Error', 'Failed to submit data');
        }
    };
    return (
        <View>
            <Text style={{ fontSize: 24, alignItems: 'center', color: 'green', marginTop: 10 }}>Post_API</Text>
            <TextInput 
                placeholder='Enter id' 
                onChangeText={(value) => handleInput('id', value)} 
                value={formData.id.toString()} // Convert id back to string for TextInput
                keyboardType='numeric' // Ensure numeric input on keyboard
            />
            <TextInput 
                placeholder='Enter name' 
                onChangeText={(value) => handleInput('name', value)} 
                value={formData.name} 
            />
            <TextInput 
                placeholder='Enter email' 
                onChangeText={(value) => handleInput('email', value)} 
                value={formData.email} 
            />
            <Button title='Submit' onPress={handleSubmit} />
        </View>
    );
}
export default Post_API;