import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/Home/Home';


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{
          tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
          component={Home} />
        <Tab.Screen
          options={{
            tabBarLabel: 'Settings', tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cogs" color={color} size={26} />
            ),
          }}
          name="Settings"
          component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}