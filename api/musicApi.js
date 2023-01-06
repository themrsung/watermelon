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

// 글쓰기입니다. 오류내시면 서버에 그대로 들어가요.
export const createMusic = async (music) => {
    const musicUuid = uuid.v4()
    let newMusic = music
    newMusic.uuid = musicUuid

    await axios.post(SERVER_URL + "/musics/" + musicUuid, newMusic)
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

// 글을 전부 가져옵니다. filter는 알아서 돌리세요ㅋ
export const getMusics = async () => {
    const response = await axios.get(SERVER_URL + "/musics")
    if (!response) {
        return []
    }

    return response.data
}

export const getMusicMetadataFromYouTube = async (musicUuid) => {
    const music = await getMusic(musicUuid)
    console.log(music.musicLink)
    const response = await fetch(music.musicLink)
    const htmlString = await response.text()

    const $ = load(htmlString)

    const artistAndTitle = $("title").text()
    const artist = artistAndTitle.split(" - ")[0]
    const title = artistAndTitle.split(" - ")[1]

    return {
        title: title,
        artist: artist
    }
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
