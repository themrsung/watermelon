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
    window.onload = function () {

        function clickUnmute () {
            const unmuteButton = document.getElementsByClassName("ytp-unmute-inner")[0]
            unmuteButton.click()
            alert("unmuted")
        }        

        function clickPlayer () {
            const player = document.getElementsByClassName("player-controls-content")[0]
            player.click()
            alert("Player CLicked")
        }

        function clickPlayPauseButton () {
            const playPauseButton = document.getElementsByClassName("player-control-play-pause-icon")[0]
            playPauseButton.click()
            alert("play pause clicked")
        }

        clickUnmute()
        setTimeout(clickPlayer, 100)
        setTimeout(clickPlayPauseButton, 200)


    }
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
            injectedJavaScript={runFirst}
        />
    )
}
