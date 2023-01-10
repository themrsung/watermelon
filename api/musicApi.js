// Music API

import axios from "axios"
import {
    DELETE_MUSIC_FAILED,
    DELETE_MUSIC_SUCCEEDED,
    EDIT_MUSIC_FAILED,
    EDIT_MUSIC_SUCCEEDED,
    SERVER_URL
} from "./apiSettings"
import uuid from "react-native-uuid"
import { load } from "cheerio"
import WebView from "react-native-webview"

// 글쓰기입니다. 오류내시면 서버에 그대로 들어가요.
export const createMusic = async (music) => {
    const musicUuid = uuid.v4()
    let newMusic = music
    newMusic.uuid = musicUuid

    await axios.post(SERVER_URL + "/musics", newMusic)
    return musicUuid
}

// 글 1개를 가져옵니다.
export const getMusic = async (uuid) => {
    const response = await axios.get(SERVER_URL + "/musics")

    if (!response) {
        return {}
    }

    const matchingMusics = response.data.filter((m) => m.uuid === uuid)
    if (matchingMusics.length < 1) {
        return {}
    }

    const matchingMusic = matchingMusics[0]
    return matchingMusic
}

export const getMusicByArtistAndTitle = async (artistAndTitle) => {
    const musics = await getMusics()

    musics.forEach(async (m) => {
        const metadata = await getMusicMetadataFromYouTube(m)
        if (metadata.artistAndTitle === artistAndTitle) {
            return m
        }
    })

    return {}
}

// 글을 전부 가져옵니다. filter는 알아서 돌리세요ㅋ
export const getMusics = async () => {
    const response = await axios.get(SERVER_URL + "/musics")
    if (!response) {
        return []
    }

    return response.data
}

// 유튜브 크롤링해서 제목과 아티스트 갖다줍니다.
export const getMusicMetadataFromYouTube = async (musicUuid) => {
    const music = await getMusic(musicUuid)
    const response = await fetch(music.musicLink)
    const htmlString = await response.text()

    const $ = load(htmlString)

    const artistAndTitle = $("title").text().slice(0, -10)

    let artist = "Various Artists"
    let title = artistAndTitle

    const splitters = [" - ", " _ "]

    splitters.forEach((s) => {
        if (artistAndTitle.includes(s)) {
            artist = artistAndTitle.split(s)[0]
            title = artistAndTitle.split(s)[1]
        }
    })

    return {
        title: title,
        artist: artist,
        artistAndTitle: artistAndTitle
    }
}

// musicUuid로 YT Thumbnail을 가져옵니다.
export const getMusicThumbnailLinkFromYouTube = async (musicUuid) => {
    const music = await getMusic(musicUuid)
    const videoId = music.musicLink.slice(-11)

    if (!videoId) {
        return ""
    }

    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

// musicUuid로 Google에서 lyrics를 가져옵니다.
export const getMusicLyricsFromGoogle = async (musicUuid) => {
    // const musicMetadata = await getMusicMetadataFromYouTube(musicUuid)
    // if (!musicMetadata) {
    //     return ""
    // }

    // const musicArtistAndTitle = `${musicMetadata.artist} - ${musicMetadata.title}`
    // const googleSearchLink = `https://www.google.com/search?q=${musicArtistAndTitle}+lyrics`

    // const GoogleLyricsPage = ({ link }) => {
    //     return <WebView source={{ uri: link }} />
    // }

    // return <GoogleLyricsPage link={googleSearchLink} />

    // 즐
    return "지원되지 않는 기능입니다ㅋ"
}

// uuid에 해당하는 글을 두번째 파라미터의 글로 수정합니다.
export const editMusic = async (uuid, newMusic) => {
    const response = await axios.put(SERVER_URL + "/musics/" + uuid, newMusic)

    if (!response) {
        return EDIT_MUSIC_FAILED
    }

    return EDIT_MUSIC_SUCCEEDED
}

// uuid에 해당하는 글을 삭제합니다.
export const deleteMusic = async (uuid) => {
    const response = await axios.delete(SERVER_URL + "/musics/" + uuid)

    if (!response) {
        return DELETE_MUSIC_FAILED
    }
    return DELETE_MUSIC_SUCCEEDED
}
