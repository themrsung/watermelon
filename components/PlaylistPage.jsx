import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PlaylistList from "./MyPlayList"

export default function PlaylistPage({ route }) {
    const playlistUuid = useSelector((state) => state.currentPlaylist.playlist)
    console.log(playlistUuid)

    const [a, setA] = useState(false)
    useEffect(() => {
        setA(!a)
    }, [route])

    return <PlaylistList playlistUuid={playlistUuid} />
}
