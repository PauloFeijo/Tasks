import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Agenda
    }
}

const RootStack = createStackNavigator(MainRoutes, {
    initialRouteName: 'Auth'
})
const Navigator = createAppContainer(RootStack);

export default Navigator