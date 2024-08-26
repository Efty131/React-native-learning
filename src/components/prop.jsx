import { View, Text, Button } from 'react-native'
import React, { useState } from 'react';
import Child from '../components/child';

const prop = () => {

    const [count, setCount] = useState(0);
    const name = "Bainna";

  return (
    <View>
      <Text  style={{textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 39}}>prop</Text>
      <Button title="Count" onPress={() => setCount(count + 1)} />
      <Child data={count} item={name} />
    </View>
  )
}

export default prop;