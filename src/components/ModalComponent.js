import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import closeIcon from './../assets/images/close.png';
import { TextBold } from './TextComponent';

export const ModalPopUpFromBottom = (props) => {
    return (
        <Modal visible={props.visible} animationType='slide' transparent={true} >
            <View style={styles.modalContainerBackground}>
                <View>
                    <View style={styles.modalPopUpFromBottomStyle}>
                        <TouchableWithoutFeedback onPress={props.onClose}>
                            <Image source={closeIcon} style={{ width: wp(4), height: wp(4) }} />
                        </TouchableWithoutFeedback>
                        <View style={{marginVertical:wp(3)}}>
                            <TextBold style={{ fontSize: 24 }}>More Lemonilo features!</TextBold>
                        </View>
                        {props.children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainerBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        justifyContent: 'flex-end'
    },
    modalPopUpFromBottomStyle: {
        backgroundColor: 'white',
        height: hp(100) / 3,
        width: '100%',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: wp(3)
    }
})