import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Product from './screens/Product';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Product />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
