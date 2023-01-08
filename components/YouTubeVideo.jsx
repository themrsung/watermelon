import { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { getMusic } from "../api/musicApi"
import { WebView } from "react-native-webview"

export default function YouTubeVideo({ musicUuid, isPlaying }) {
    const [music, setMusic] = useState({})

    const fetchMusic = async () => {
        const newMusic = await getMusic(musicUuid)
        if (!newMusic) {
            return
        }

        setMusic(newMusic)
    }

    useEffect(() => {
        fetchMusic()
    }, [])

    const runFirst = `
    $( document ).ready(function() {
        alert("test")
        const videos = document.getElementsByClassName("ytp-unmute-inner")
        for (let i = 0; i < videos.length; i++) {
            videos[i].click()
        }
    })
    `

    // https://www.npmjs.com/package/react-native-youtube

    // return music.musicLink !== undefined ? (
    //     <WebView
    //         source={{
    //             uri:
    //                 "https://www.youtube.com/embed/" +
    //                 music.musicLink.substr(music.musicLink.length - 11)
    //         }}
    //     />
    // ) : (
    //     <></>
    // )

    return (
        <WebView
            mixedContentMode="always"
            source={{ uri: music.musicLink }}
            injectedJavaScriptBeforeContentLoaded={runFirst}
        />
    )
}
