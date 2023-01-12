import { StatusBar } from "expo-status-bar"
import styled from "@emotion/native"
import { getMusics } from "./api/musicApi"
import { useEffect, useState } from "react"
import NavContainer from "./navigation/NavContainer"
import { Provider } from "react-redux"
import { store } from "./redux/stores"
import YouTubeVideo from "./components/YouTubeVideo"
import { LogBox } from "react-native"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;
    flex: 1;
`

export default function App() {
    LogBox.ignoreAllLogs()

    const [musics, setMusics] = useState([])
    const [musicTitle, setMusicTitle] = useState("")

    const fetchMusics = async () => {
        const newMusics = await getMusics()
        setMusics(newMusics)
    }

    useEffect(() => {
        fetchMusics()
    }, [])

    return (
        <SafeAreaView>
            <Provider store={store}>
                <NavContainer />

                <StatusBar style="auto" />
            </Provider>
        </SafeAreaView>
    )
}
