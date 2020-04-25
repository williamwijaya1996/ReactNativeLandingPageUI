import React from 'react';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const TabIcon = ({ icon, tintColor }) => {
    return (
        <Image
            source={icon}
            style={{ width: wp(7.2), height: wp(7, 2), tintColor: tintColor }} />
    )
}