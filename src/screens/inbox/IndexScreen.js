import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import BaseComponent from '../../components/BaseComponent';

class IndexScreen extends BaseComponent {

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View>
                    <Text>INBOX</Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default IndexScreen;