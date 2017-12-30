import * as React from 'react'

import { DrawerNavigator } from 'react-navigation'

import { Account } from './account'
import { Tabs } from './tabs'

const routes: object = {
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            drawerLabel: 'Tabs'
        }
    }
}

const config: object = {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: () => <Account />
}

export const Overlay = DrawerNavigator(routes, config)
