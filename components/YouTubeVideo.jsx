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

    // https://www.npmjs.com/package/react-native-youtube

    return <WebView source={{ uri: music.musicLink }} />
}
