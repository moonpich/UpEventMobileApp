import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AvailableEvents from '../screens/AvailableEvents.jsx';
import SaveEvents from '../screens/SaveEvents.jsx';
import SearchEvents from '../screens/SearchEvents.jsx';
import Event from '../screens/Event.jsx';
import Access from '../screens/Access.jsx';
import { CalendarClock, CalendarHeart, CalendarSearch, CircleUserRound } from 'lucide-react-native';
import Profile from '../screens/Profile.jsx';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AvailableEventsStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true, 
      headerTitle: '',  
      headerStyle: {
        backgroundColor: '#000000', 
      },
      headerTintColor: '#FFFFFF',  
    }}>
      <Stack.Screen name="AvailableEventsScreen" component={AvailableEvents} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
}

function SaveEventsStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,  
      headerTitle:'',  
      headerStyle: {
        backgroundColor: '#000000', 
      },
      headerTintColor: '#FFFFFF',  
    }}>
      <Stack.Screen name="SaveEventsScreen" component={SaveEvents} />
      <Stack.Screen name="Access" component={Access} /> 
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'AvailableE') {
            icon = <CalendarClock size={size} color={color} />;
          } else if (route.name === 'SaveE') {
            icon = <CalendarHeart size={size} color={color} />;
          } else if (route.name === 'SearchE') {
            icon = <CalendarSearch size={size} color={color} />;
          }else if (route.name === 'Profile') {
            icon = <CircleUserRound size={size} color={color} />;
          }
          return icon;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#B23BC4',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: { backgroundColor: "#0e0e0e" },
      })}
    >
      <Tab.Screen name="AvailableE" component={AvailableEventsStack} />
      <Tab.Screen name="SaveE" component={SaveEventsStack} /> 
      <Tab.Screen name="SearchE" component={SearchEvents} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
