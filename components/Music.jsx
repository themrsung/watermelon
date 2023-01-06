import { useEffect } from "react"
import { getMusic, getMusicMetadataFromYouTube } from "../api/musicApi"

export default function Music({ musicUuid }) {
    const [music, setMusic] = useState({})
    const [musicMetadata, setMusicMetadata] = useState({})

    const fetchMusicAndMetadata = async () => {
        const fetchedMusic = await getMusic(musicUuid)
        const fetchedMusicMetadata = await getMusicMetadataFromYouTube(
            musicUuid
        )

        if (!fetchedMusic || !fetchedMusicMetadata) {
            return
        }

        setMusic(fetchedMusic)
        setMusicMetadata(fetchedMusicMetadata)
    }

    useEffect(() => {
        fetchMusicAndMetadata()
    }, [])

    // 음악 => music
    // 음악 제목 => musicMetadata.title
    // 아티스트 => musicMetadata.artist

    return <View></View>
}
