/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Posts from './src/screens/Post/posts';
import Login from './src/screens/Login/login';
import DetilsPage from './src/screens/PostDetail/detilsPage';
import { Provider } from 'react-redux';
import store from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="DetilsPage" component={DetilsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
