import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './../screens/inbox/IndexScreen';


const Stack = createStackNavigator()

export default homeRoute = function HomeRoute() {
    return (
        <Stack.Navigator initialRouteName="Inbox">
            <Stack.Screen name="Inbox" component={IndexScreen}
                options={{
                    headerTitleAlign: 'center'
                }} />
        </Stack.Navigator>
    )
}