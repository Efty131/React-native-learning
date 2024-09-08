import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const get_api = () => {
const [myData, setMyData] = useState([]);
    useEffect(() => {
        // fetch('https://first-server-for-react-native.onrender.com/users').then((res) => {
        //     res.json().then((data) => {
        //         console.log(data);
        //     });
        // });
        axios.get('https://first-server-for-react-native.onrender.com/users').then((result) => {
            // result data mane axios data namer 1 ta object banaya tar vitore sob rakhbo
            setMyData(result.data);
        })
    }, []);
  return (
    <View>
      <Text style={{fontSize: 24, marginBottom: 10}}>Get API Method</Text>
      {
        myData.map((item) => (
            <Text key={item.id} style={{fontSize: 20, color: 'aqua', marginBottom: 10}}>{item.name}</Text>
        ))
      }
    </View>
  )
}
export default get_api;