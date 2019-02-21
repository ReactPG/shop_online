import React, { Component } from 'react'
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import I18n from "../i18n/I18n"
import Colors from '../themes/Colors'

import { Home } from '../screens/'
import {
    ProductStack,
    UtilityStack,
    SettingStack
} from './index'


const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerStyle: {
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0,
                backgroundColor: Colors.headerColor,
            },
            // title: I18n.t('appName'),
            headerTintColor: Colors.white,
            //header: null   // Hide header for get new header by element 3rd library
        },
        
    },
    // Staff: {
    //     screen: StaffStack,
    //     navigationOptions: {
    //         headerStyle: {
    //             elevation: 0, // remove shadow on Android,
    //             shadowOpacity: 0
    //         },
    //         tabBarVisible: false,
    //         title:'Staff Info'
    //     }
    // }
},
    {
        // ສັ່ງໃຫ້ Page ເຫຼົ່ານີ້ໃຫ້ສະໄລໄປທາງຂວາມື
        transitionConfig: getSlideFromRightTransition,
        defaultNavigationOptions: {
            headerStyle: {
                // backgroundColor: '#22aedd',
            },
        },
        headerMode:'none'
    }
)

export default TabNavigator({
    Home: {
        screen: HomeStack, navigationOptions: () => ({
            title: I18n.t('home'),
            tabBarLabel: I18n.t('home')
        })
    },
    Product: {
        screen: ProductStack, navigationOptions: () => ({
            title: I18n.t('product'),
            tabBarLabel: I18n.t('product'),
        })
    },
    Utility: {
        screen: UtilityStack, navigationOptions: () => ({
            title: I18n.t('utility'),
            tabBarLabel: I18n.t('utility')
        })
    },
    Setting: {
        screen: SettingStack, navigationOptions: () => ({
            title: I18n.t('settings'),
            tabBarLabel: I18n.t('settings')
        })
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                switch (routeName) {
                    case 'Home':
                        iconName = `ios-home${focused ? '' : '-outline'}`
                        break
                    case 'Product':
                        iconName = `ios-analytics${focused ? '' : '-outline'}`
                        break
                    case 'Utility':
                        iconName = `ios-person${focused ? '' : '-outline'}`
                        break
                    case 'Setting':
                        iconName = `ios-settings${focused ? '' : '-outline'}`
                        break
                }
                return <Ionicons name={iconName} color={tintColor} size={32} />
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: Colors.activate,
            inactiveTintColor: 'gray'
        },
        animationEnabled: false,
        swipeEnabled: false
    })