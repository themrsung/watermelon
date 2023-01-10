import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "../components/Login"
import PlayMusic from "../components/PlayMusic"
import Register from "../components/Register"
import Home from "../components/Home"
import { createStackNavigator } from "@react-navigation/stack"
import PlayList from "../components/PlayList"
import MyPlayList from "../components/MyPlayList"
import CreatePlayList from "../components/CreatePlayList"
import MyPlayList2 from "../components/MyPlayList2"
import Comment from "../components/Comment"
import UserProfile from "../components/UserProfile"
import OutRegisterPW from "../components/OutRegisterPW"
import Out from "../components/Out"

// Screen names
export const HOME_NAME = "Home"
export const LOGIN_NAME = "Login"
export const REGISTER_NAME = "Register"
export const MY_PLAYLIST_NAME = "My Playlist"
export const PLAYLIST_INFO_NAME = "Playlist Info"
export const PLAY_MUSIC_NAME = "Play Music"
export const CREATE_PLAYLIST_NAME = "Create PlayList"
export const MY_PLAYLIST2_NAME = "playlist2 Info"
export const COMMENT_NAME = "Comment"
export const USER_PROFILE_NAME = "User Profile"
export const OUT_REGISTOR_PW_NAME = "Out Registor Pw"
export const OUT_NAME = "Out"

const Stack = createStackNavigator()

export default function NavContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={HOME_NAME}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={HOME_NAME} component={Home} />
                <Stack.Screen name={LOGIN_NAME} component={Login} />
                <Stack.Screen name={REGISTER_NAME} component={Register} />
                <Stack.Screen name={MY_PLAYLIST_NAME} component={MyPlayList} />
                <Stack.Screen name={PLAYLIST_INFO_NAME} component={PlayList} />
                <Stack.Screen name={PLAY_MUSIC_NAME} component={PlayMusic} />
                <Stack.Screen
                    name={CREATE_PLAYLIST_NAME}
                    component={CreatePlayList}
                />
                <Stack.Screen
                    name={MY_PLAYLIST2_NAME}
                    component={MyPlayList2}
                />
                <Stack.Screen name={COMMENT_NAME} component={Comment} />
                <Stack.Screen
                    name={USER_PROFILE_NAME}
                    component={UserProfile}
                />
                <Stack.Screen
                    name={OUT_REGISTOR_PW_NAME}
                    component={OutRegisterPW}
                />
                <Stack.Screen name={OUT_NAME} component={Out} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
