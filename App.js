import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IgHeader from './src/components/IgHeader';
import Header from './src/components/Header';
import HomeScreen from './src/components/HomeScreen';
import FriendListScreen from './src/components/FriendListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
        name="HeaderBar"
        component={HomeScreen}
        options={{ 
        headerStyle: {
          height: 0,
        },
      }}
      />
      <Stack.Screen
        name="FriendListHeaderBar"
        component={FriendListScreen}
        options={{ 
        headerStyle: {
          title: 'friend',
          height: 0,
        },
      }}
      /> */}
        <Stack.Screen options={{headerShown: false}} name="Homepage" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="FriendList" component={FriendListScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;