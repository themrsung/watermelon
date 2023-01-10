import { StatusBar } from "expo-status-bar"
import styled from "@emotion/native"
import { getMusics } from "./api/musicApi"
import { useEffect, useState } from "react"
import CreatePlayList from "./components/CreatePlayList"
import NavContainer from "./navigation/NavContainer"
import Out from "./components/Out"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;
    flex: 1;
`

export default function App() {
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
            <Out />
            {/* <NavContainer /> */}
            {/* <CreatePlayList /> */}
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
