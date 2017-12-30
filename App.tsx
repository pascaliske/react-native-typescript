import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

import { Overlay } from './components/overlay'
// import { Tabs } from './components/tabs'

export default class App extends React.Component {
    render() {
        return (
            <Overlay />
            // <Tabs />
        )
    }
}
