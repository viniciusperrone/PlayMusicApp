import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import {spotifyCrendentials} from './secrets';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vinicius Perrone</Text>
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
