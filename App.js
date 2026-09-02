import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import DoubleNumber from './src/components/DoubleNumber';
import { styles } from './src/styles/styles.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DoubleNumber />
    </SafeAreaView>
  );
}
