import * as React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d333d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})

export class Account extends React.Component {
    /* --- constants --- */

    /* --- properties --- */

    /* --- constructor --- */

    /* --- protected --- */

    /* --- public --- */

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{JSON.stringify(this.props, null, 4)}</Text>
                <Text style={styles.text}>Account.</Text>
            </View>
        )
    }
}
