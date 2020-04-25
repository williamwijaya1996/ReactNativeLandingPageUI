import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './../screens/order/IndexScreen';


const Stack = createStackNavigator()

export default homeRoute = function HomeRoute() {
    return (
        <Stack.Navigator initialRouteName="Order">
            <Stack.Screen name="Order" component={IndexScreen}
                options={{
                    headerTitleAlign: 'center'
                }} />
        </Stack.Navigator>
    )
}