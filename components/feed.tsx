import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#2d333d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})

export class Feed extends React.Component {
    /* --- constants --- */

    /* --- properties --- */

    /* --- constructor --- */

    /* --- protected --- */

    protected onLeftIconClick(): void {
        console.log('pressed')

        this.props.navigation.navigate('DrawerToggle')
    }

    /* --- public --- */

    public render(): JSX.Element {
        const statusBar: object = {
            barStyle: 'light-content'
        }
        const left: any = <Icon type='evilicon' name='user' color='#fff' size={35} onPress={() => this.onLeftIconClick()} />
        const center: object = {
            text: 'Feed',
            style: {
                color: '#fff'
            }
        }
        const right: any = <Icon name='list' color='#fff' size={35} />

        return (
            <View style={styles.container}>
                <Header statusBarProps={statusBar} leftComponent={left} centerComponent={center} rightComponent={right} />
                <View style={styles.content}>
                    <Text style={styles.text}>{JSON.stringify(this.props, null, 4)}</Text>
                    <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
                    <Text style={styles.text}>Changes you make will automatically reload.</Text>
                    <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
                </View>
            </View>
        )
    }
}
