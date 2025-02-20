import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Product from './screens/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerShown: true,
                headerTitle: 'Store',
                headerTitleStyle: {
                  color: '#B22222',
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerLeft: () => null,
                gestureEnabled: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
