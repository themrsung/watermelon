import {
    createBottomTabNavigator,
    NavigationContainer
} from "@react-navigation/native"

// Screen names
const HOME_NAME = "Home"

const Tab = createBottomTabNavigator()

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HOME_NAME}></Tab.Navigator>
        </NavigationContainer>
    )
}
