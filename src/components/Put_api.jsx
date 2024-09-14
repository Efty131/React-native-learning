import { View, Text, TextInput, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
const Put_api = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' });
    const handleInput = (field, value) => {
        if (field === 'id') {
            // Ensure the 'id' is a number or empty
            setFormData({ ...formData, [field]: parseInt(value) || '' });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };
    // Function to handle the update button press
    const handleUpdate = async () => {
        if (!formData.id || !formData.name || !formData.email) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        try {
            const response = await axios.put(`https://first-server-for-react-native.onrender.com/users/${formData.id}`, {
                name: formData.name,
                email: formData.email,
            });
            Alert.alert('Success!', 'Information updated');
            console.log(response.data);
            // Clear form after success
            setFormData({ id: '', name: '', email: '' });
        } catch (error) {
            Alert.alert('Error', 'Failed to update');
            console.error(error);  // Log the error for debugging
        }
    };
    return (
        <View>
            <Text style={{ fontSize: 24, color: 'green', textAlign: 'center' }}>Put Api</Text>
            <TextInput
                placeholder="Enter id"
                value={formData.id.toString()}
                keyboardType="numeric" onChangeText={(value) => handleInput('id', value)} />
            <TextInput
                placeholder="Enter name"
                value={formData.name} onChangeText={(value) => handleInput('name', value)} />
            <TextInput
                placeholder="Enter email"
                value={formData.email} onChangeText={(value) => handleInput('email', value)} />
            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
};
export default Put_api;