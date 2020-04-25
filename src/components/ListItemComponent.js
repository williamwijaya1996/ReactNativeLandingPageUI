import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextBold } from './TextComponent';
import iconDeliveryLemonilo from './../assets/images/icon_delivery_lemonilo.png';
import { priceFormated } from '../Utils/utils';


export const ProductListItem = ({ image, label, weight, cashback = null, rate, totalRate, price }) => {

    let safePrice = price / 100 * cashback;
    let discountPrice = price - safePrice;

    return (
        <TouchableOpacity style={[styles.buttonProductContainerStyle, styles.buttonShadow]}>
            <View style={{ flex: 1 }}>
                <Image source={image} style={styles.imageProductStyle} />
                <Image source={iconDeliveryLemonilo} style={{ width: wp(20), height: wp(20), position: 'absolute', right: wp(5), top: wp(1) }} />
            </View>
            <View style={styles.contentProductContainerStyle}>
                <Text style={styles.textExtraStyle}>Lemonilo</Text>
                <TextBold style={[styles.textExtraStyle,]} numberOflines={2}>{label}</TextBold>
                <Text style={styles.textExtraStyle}>{weight}</Text>
                <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', margin: wp(1) }}>
                    <Text style={styles.textExtraStyle}>Rate:</Text>
                    <Text style={{ color: 'yellow', marginHorizontal: wp(1) }}>{rate}%</Text>
                    {totalRate === 0 ? null : <Text style={[styles.textExtraStyle, { fontWeight: '200' }]}>({totalRate})</Text>}
                    {cashback === null ? null : <View style={{ borderColor: '#e25e4e', borderWidth: 1, padding: wp(1), borderRadius: 5, marginLeft: wp(1) }}>
                        <Text style={{ color: '#e25e4e' }}>Cashback {cashback}%</Text>
                    </View>}
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    {cashback === null ? null : <Text style={styles.textDiscounted}>{priceFormated(price)}</Text>}
                    {cashback === null ? <Text style={styles.textExtraStyle}>Rp {priceFormated(price)}</Text> : <Text style={styles.textExtraStyle}>Rp {priceFormated(discountPrice)}</Text>}
                </View>

                {cashback === null ? null : <Text style={[styles.textExtraStyle, { color: '#cfd0d2' }]}>Hemat Rp {priceFormated(safePrice)}</Text>}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonProductContainerStyle: {
        borderRadius: 15,
        width: wp(80),
        height: Dimensions.get('window').width > 390 ? wp(75) : wp(85),
        backgroundColor: '#ffff',
        marginHorizontal: wp(5),
        marginBottom: wp(5)
    },
    imageProductStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    contentProductContainerStyle: {
        backgroundColor: '#78c02f',
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: wp(2)
    },
    buttonShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textDiscounted: {
        textDecorationLine: 'line-through',
        color: '#cfd0d2',
        fontStyle: 'italic',
        marginRight: wp(1)
    },
    textExtraStyle: {
        textAlign: 'center',
        color: 'white'
    }
})