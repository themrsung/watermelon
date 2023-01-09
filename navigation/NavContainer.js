import {
    createBottomTabNavigator,
    NavigationContainer
} from "@react-navigation/native"
import ScrollContents from "../components/ScrollContents"

// Screen names
const HOME_NAME = "Home"
const LOGIN_NAME = "Login"
const REGISTER_NAME = "Register"
const MY_PLAYLIST_NAME = "My Playlist"
const PLAYLIST_INFO_NAME = "Playlist Info"
const PLAY_MUSIC_NAME = "Play Music"

const Tab = createBottomTabNavigator()

export default function NavContainer() {
    const navigation = Tab.navigation

    // 사용법
    // navigation.navigate({name: SCREEN_NAME})

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HOME_NAME}>
                <Tab.Screen name={HOME_NAME} component={<ScrollContents />} />
                <Tab.Screen name={LOGIN_NAME} component={<ScrollContents />} />
                <Tab.Screen
                    name={REGISTER_NAME}
                    component={<ScrollContents />}
                />
                <Tab.Screen
                    name={MY_PLAYLIST_NAME}
                    component={<ScrollContents />}
                />
                <Tab.Screen
                    name={PLAYLIST_INFO_NAME}
                    component={<ScrollContents />}
                />
                <Tab.Screen
                    name={PLAY_MUSIC_NAME}
                    component={<ScrollContents />}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
