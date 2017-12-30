import * as React from 'react'
import { Icon } from 'react-native-elements'

export const tabIcon = (id: string) => (props: any) => {
    const [type, name] = id.split(':')
    return <Icon type={type} name={name} size={35} color={props.tintColor} />
}
