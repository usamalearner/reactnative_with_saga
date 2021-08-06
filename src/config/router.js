import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Login from '../screens/login';
import {
 
    Text,
   
  } from 'react-native';
const Stack = createNativeStackNavigator();

function AppNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    title: "SAGA REACT",
                    headerStyle: { backgroundColor: "purple" },
                    headerTitle: props => <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>SAGA REACT</Text>
                }}
                    name="login" component={Login} />
                {/* <Stack.Screen  options={{
                    headerShown: false
                }} name="Page" component={Page} /> */}
                <Stack.Screen options={{
                    headerStyle: { backgroundColor: 'purple' },
                    headerTitle: props => <Text style={{ color: 'white', fontSize: 20, }}>DASHBOARD</Text>
                }} name="home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;
