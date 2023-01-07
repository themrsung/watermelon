import { StatusBar } from "expo-status-bar"
import { View, Text, ScrollView } from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"
import ScrollContents from "./components/ScrollContents"
import PlayList from "./components/PlayList"
import PlayMusic from "./components/PlayMusic"
import { getMusicMetadataFromYouTube, getMusics } from "./api/musicApi"
import { useEffect, useState } from "react"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;

    margin: 30px 0;
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
            <Header />
            {/* <PlayList /> */}
            <ScrollView style={{ backgroundColor: "yellpw" }}>
                <ScrollContents />
            </ScrollView>

            {/* <PlayMusic /> */}
            <StatusBar style="auto" />
            {/* <View>
                <Text>test</Text>
                {musics.map((music) => {
                    return (
                        <View key={music.uuid}>
                            <Text>{music.musicLink}</Text>
                        </View>
                    )
                })}
            </View> */}
        </SafeAreaView>
    )
}
