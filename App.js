import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './screens/AvailableEvents.js'
import AvailableEvents from './screens/AvailableEvents.js';

export default function App() {
  return (
  
      <AvailableEvents/>

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
