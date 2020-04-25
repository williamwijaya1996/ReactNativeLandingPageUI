import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeRoute from './HomeRoute';
import AccountRoute from './AccountRoute';
import InboxRoute from './InboxRoute';
import OrderRoute from './OrderRoute';
import { TabIcon } from '../components/TabComponent';

import homeIcon from './../assets/images/home.png';
import accountIcon from './../assets/images/account.png';
import inboxIcon from './../assets/images/inbox.png';
import orderIcon from './../assets/images/order.png';


const Tab = createBottomTabNavigator()

export const BottonNav = function bottomNavigation() {

    return (
        <Tab.Navigator
            initialRouteName="HomeRoute"
            tabBarOptions={{
                style: {
                    height: Platform.OS === "ios" ? wp(25) : Dimensions.get('window').width > 390 ? wp(15) : wp(20),
                    paddingTop: Platform.OS === "ios" ? 20 : Dimensions.get('window').width > 390 ? 10 : 20
                },
                labelPosition: 'below-icon',
                labelStyle: {
                    marginTop: 10,
                    marginBottom: Platform.OS === "ios" ? 0 : Dimensions.get('window').width > 390 ? 5 : -30
                },
                activeTintColor: '#b7d335'
            }}>
            <Tab.Screen
                name="HomeRoute" component={HomeRoute}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <TabIcon icon={homeIcon} tintColor={color} />
                    )
                }} />
            <Tab.Screen
                name="OrderRoute" component={OrderRoute}
                options={{
                    tabBarLabel: "Order",
                    tabBarIcon: ({ color }) => (
                        <TabIcon icon={orderIcon} tintColor={color} />
                    )
                }} />
            <Tab.Screen
                name="InboxRoute" component={InboxRoute}
                options={{
                    tabBarLabel: "Inbox",
                    tabBarIcon: ({ color }) => (
                        <TabIcon icon={inboxIcon} tintColor={color} />
                    )
                }} />
            <Tab.Screen
                name="AccountRoute" component={AccountRoute}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color }) => (
                        <TabIcon icon={accountIcon} tintColor={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}