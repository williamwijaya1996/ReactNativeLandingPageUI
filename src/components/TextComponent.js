import React from 'react';
import { StyleSheet, Text } from 'react-native';


export const TextBold = (props) => {
    return (
        <Text style={[style.textBold, props.style]} numberOfLines={props.numberOfLines}>{props.children}</Text>
    )
}


const style = StyleSheet.create({
    textBold: {
        fontWeight: 'bold'
    }
})