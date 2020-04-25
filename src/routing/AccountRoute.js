import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerStyle } from './../components/HeaderComponent';
import IndexScreen from './../screens/account/IndexScreen';


const Stack = createStackNavigator()

export default homeRoute = function HomeRoute() {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen name="Account" component={IndexScreen}
                options={{
                    title: 'My Profile',
                    headerTitleAlign: 'left',
                    headerTitleStyle: headerStyle.commonHeaderBig
                }} />
        </Stack.Navigator>
    )
}

