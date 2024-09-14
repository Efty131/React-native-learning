import { View, Text, TextInput, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Patch_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' });

    const handleInput = (field, value) => {
        if (field === 'id') {
            setFormData({ ...formData, [field]: parseInt(value) || '' });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    };

    // Function to handle the patch button press
    const handlePatch = async () => {
        if (!formData.id || (!formData.name && !formData.email)) {
            Alert.alert('Error', 'Please provide an ID and at least one field to update');
            return;
        }

        // Prepare the data for the patch request
        const patchData = {};
        if (formData.name) patchData.name = formData.name;
        if (formData.email) patchData.email = formData.email;

        try {
            const response = await axios.patch(`https://first-server-for-react-native.onrender.com/users/${formData.id}`, patchData);
            Alert.alert('Success!', 'Information updated');
            console.log(response.data);

            // Clear form after success
            setFormData({ id: '', name: '', email: '' });
        } catch (error) {
            Alert.alert('Error', 'Failed to update');
            console.error(error); // Log the error for debugging
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 24, color: 'blue', textAlign: 'center' }}>Patch Api</Text>
            <TextInput
                placeholder="Enter id"
                value={formData.id.toString()}
                keyboardType="numeric"
                onChangeText={(value) => handleInput('id', value)}
            />
            <TextInput
                placeholder="Enter name (optional)"
                value={formData.name}
                onChangeText={(value) => handleInput('name', value)}
            />
            <TextInput
                placeholder="Enter email (optional)"
                value={formData.email}
                onChangeText={(value) => handleInput('email', value)}
            />
            <Button title="Update" onPress={handlePatch} />
        </View>
    );
};

export default Patch_API;
