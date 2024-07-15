import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlightSearchPage from '../components/screens/FlightSearchPage';
import FlightSearchResultsPage from '../components/screens/FlightSearchResultsPage';
import FlightDetailsPage from '../components/screens/FlightDetailsPage'; 

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlightSearch">
        <Stack.Screen 
          name="FlightSearch" 
          component={FlightSearchPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FlightSearchResults" 
          component={FlightSearchResultsPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FlightDetails" 
          component={FlightDetailsPage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
