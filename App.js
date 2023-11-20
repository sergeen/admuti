import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [initalTime, setInitalTime] = useState(0);
  const [text, setText] = useState('das');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Counter {Math.floor((currentTime - initalTime) / 1000)}</Text>
      <SafeAreaView>
        <Button title="Start counter" onPress={e => setInitalTime(new Date().getTime())}></Button>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
