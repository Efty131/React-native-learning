import { View, Text, TextInput, Alert, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Delete_api = () => {
    const [id, setId] = useState('');

    // Function to handle the delete button press
    const handleDelete = async () => {
        if (!id) {
            Alert.alert('Error', 'Please enter an ID');
            return;
        }

        try {
            const response = await axios.delete(`https://first-server-for-react-native.onrender.com/users/${id}`);
            Alert.alert('Success!', 'User deleted');
            console.log(response.data);

            // Clear the input field after success
            setId('');
        } catch (error) {
            Alert.alert('Error', 'Failed to delete user');
            console.error(error); // Log the error for debugging
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 24, color: 'red', textAlign: 'center' }}>Delete Api</Text>
            <TextInput
                placeholder="Enter id"
                value={id.toString()}
                keyboardType="numeric"
                onChangeText={(value) => setId(value)}
            />
            <Button title="Delete" onPress={handleDelete} />
        </View>
    );
};

export default Delete_api;