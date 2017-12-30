import * as React from 'react'
import { TabNavigator } from 'react-navigation'

import { tabIcon } from '../utils/icons'

import { Feed } from './feed'
import { Search } from './search'
import { About } from './about'

const routes: object = {
    Feed: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: tabIcon('material-icons:timeline')
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: tabIcon('evilicon:search')
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarLabel: 'About',
            tabBarIcon: tabIcon('ionicon:ios-information-circle-outline')
        }
    }
}

export const Tabs = TabNavigator(routes)
