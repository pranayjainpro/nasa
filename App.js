import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './src/Screens/LandingPage';
import AsteroidData from './src/Screens/AsteroidData';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={LandingPage}
        />
        <Stack.Screen name="AsteroidData" component={AsteroidData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
