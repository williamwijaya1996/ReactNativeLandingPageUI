import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottonNav } from './routing/MainRoute';

export default class App extends Component {
    
    render() {
        console.disableYellowBox = true;  
        return (
            <NavigationContainer>
                <BottonNav />
            </NavigationContainer>
        )
    }
}