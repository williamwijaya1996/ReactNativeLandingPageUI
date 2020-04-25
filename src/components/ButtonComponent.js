import React from 'react';
import { Image, TouchableWithoutFeedback, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const ButtonIconText = ({ icon, label, onPress, extraStyleText }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ flexDirection: 'column' }}>
                <Image source={icon} style={{ width: wp(8), height: wp(8), alignSelf: 'center' }} />
                <Text style={[{ color: '#fff', fontSize: 14, fontWeight: 'bold', marginTop: wp(1.5), textAlign: 'center' }, extraStyleText]}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export const ButtonCircleIcon = ({ icon, label, onPress }) => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{ backgroundColor: '#ffbe30', width: wp(12), height: wp(12), borderRadius: 25, alignSelf: 'center', justifyContent: 'center' }}>
                    <Image source={icon} style={{ width: wp(7.5), height: wp(7.5), alignSelf: 'center' }} />
                </View>
            </TouchableWithoutFeedback>
            <Text style={{ textAlign: 'center', marginTop: wp(3), fontWeight: '300' }}>{label}</Text>
        </View>
    )
}