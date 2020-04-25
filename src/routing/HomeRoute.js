import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './../screens/home/IndexScreen';
import { headerStyle } from '../components/HeaderComponent';


const Stack = createStackNavigator()

export default homeRoute = function HomeRoute() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={IndexScreen}
                options={{
                    headerTitleAlign: 'center'
                }} />
        </Stack.Navigator>
    )
}