import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "../components/Login"
import PlaylistHeader from "../components/PlaylistHeader"
import PlaylistList from "../components/PlaylistList"
import PlayMusic from "../components/PlayMusic"
import Register from "../components/Register"
import ScrollContents from "../components/ScrollContents"

// Screen names
export const HOME_NAME = "Home"
export const LOGIN_NAME = "Login"
export const REGISTER_NAME = "Register"
export const MY_PLAYLIST_NAME = "My Playlist"
export const PLAYLIST_INFO_NAME = "Playlist Info"
export const PLAY_MUSIC_NAME = "Play Music"

const Tab = createBottomTabNavigator()

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HOME_NAME}>
                <Tab.Screen name={HOME_NAME} component={ScrollContents} />
                <Tab.Screen name={LOGIN_NAME} component={Login} />
                <Tab.Screen name={REGISTER_NAME} component={Register} />
                <Tab.Screen name={MY_PLAYLIST_NAME} component={PlaylistList} />
                <Tab.Screen
                    name={PLAYLIST_INFO_NAME}
                    component={PlaylistHeader}
                />
                <Tab.Screen name={PLAY_MUSIC_NAME} component={PlayMusic} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
