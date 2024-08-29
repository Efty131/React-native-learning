import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
// UI render howar age kono kaj korte caile such as API theke
// data load korte caile useEffect use korte hoy
const useEffectHook = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('This is useEffect hook');
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>useEffectHook</Text>
      <Text style={{fontSize: 30}}>Count: {count}</Text>
      <Button title='Counter' onPress={() => setCount(count + 1)} />
    </View>
  )
}
export default useEffectHook;