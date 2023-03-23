import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CourseScreen from '../screens/CourseScreen';
import Course1 from '../screens/Course1';
import Course2 from '../screens/Course2';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Welcome!',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Courses" component={CourseScreen} options={{
          title: 'Course Home',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Course1" component={Course1} options={{
          title: 'Finance',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Course2" component={Course2} options={{
          title: 'Tech',
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}