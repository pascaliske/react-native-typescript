import * as React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000'
    }
})

export class About extends React.Component {
    /* --- constants --- */

    /* --- properties --- */

    /* --- constructor --- */

    /* --- protected --- */

    /* --- public --- */

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
            </View>
        )
    }
}
