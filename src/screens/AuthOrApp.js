import React, { Component } from 'react'
import Axios from 'axios'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    AsyncStorage
} from 'react-native'

export default class AuthOrApp extends Component {
    componentWillMount = async () => {
        const json = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(json) || {}

        if (userData.token) {
            Axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`

            this.props.navigation.navigate('Home', userData)
        } else {
            this.props.navigation.navigate('Auth')
        }
    }
    render() {
        return (
            <View style={StyleSheet.container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})