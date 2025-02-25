import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AvailableEvents from '../screens/AvailableEvents.jsx';
import SaveEvents from '../screens/SaveEvents.jsx';
import SearchEvents from '../screens/SearchEvents.jsx';
import { CalendarClock, CalendarHeart, CalendarSearch, CircleUserRound } from 'lucide-react-native';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === 'AvailableE') {
            icon = <CalendarClock size={size} color={color} />;
          } else if (route.name === 'SaveE') {
            icon = <CalendarHeart size={size} color={color} />;
          }  else if (route.name === 'SearchE') {
            icon = <CalendarSearch size={size} color={color} />;
          } 
          return icon;
        },
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#B23BC4',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle:{backgroundColor:"#0e0e0e"}
      })}
    >
      <Tab.Screen name="AvailableE" component={AvailableEvents}/>
      <Tab.Screen name="SaveE" component={SaveEvents} />
      <Tab.Screen name="SearchE" component={SearchEvents} />
    </Tab.Navigator>
    )
}





