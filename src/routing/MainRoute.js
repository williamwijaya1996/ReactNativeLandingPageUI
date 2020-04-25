import React from 'react';
import { Platform } from 'react-native';
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
                style: { height: Platform.OS === "ios" ? wp(25) : wp(20), paddingTop: 20 },
                labelPosition: 'below-icon',
                labelStyle: {
                    marginTop: 10,
                    marginBottom: Platform.OS === "ios" ? 0 : -30
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