import { useEffect, useState } from "react"
import { View } from "react-native"
import { getMusic } from "../api/musicApi"

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

    return <View></View>
}
