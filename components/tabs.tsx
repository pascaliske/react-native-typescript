import * as React from 'react'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import { Feed } from './feed'
import { Search } from './search'
import { About } from './about'

export const tabIcon = (name: string) => (props: any) => {
    return <Icon name={name} size={35} color={props.tintColor} />
}

export const Tabs = TabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: tabIcon('timeline')
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: tabIcon('search')
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: tabIcon('info')
        }
    }
})
