import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const useEffectHookUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
    useEffect(() => {
        console.log('Im counter');
    }, [counter]);
    useEffect(() => {
        console.log('Im score');
    }, [score]);
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>useEffectHookUpdatingPhase</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Counter: {counter}</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Score: {score}</Text>
      <Button title='Counter' onPress={() => setCounter(counter + 1)} />
      <Button title='Score' onPress={() => setScore(score + 10)} />
    </View>
  )
}
export default useEffectHookUpdatingPhase;