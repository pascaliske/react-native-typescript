import * as React from 'react'

import { DrawerNavigator } from 'react-navigation'

import { Account } from './account'
import { Tabs } from './tabs'

export const Overlay = DrawerNavigator({
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            drawerLabel: 'Tabs'
        }
    }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <Account />
})
