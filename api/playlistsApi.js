// Playlists API

import axios from "axios"
import {
    ADD_MUSIC_TO_PLAYLIST_FAILED,
    ADD_MUSIC_TO_PLAYLIST_FAILED_MUSIC_NOT_FOUND,
    ADD_MUSIC_TO_PLAYLIST_FAILED_PLAYLIST_NOT_FOUND,
    ADD_MUSIC_TO_PLAYLIST_SUCCEEDED,
    DELETE_PLAYLIST_FAILED,
    DELETE_PLAYLIST_SUCCEEDED,
    EDIT_PLAYLIST_FAILED,
    EDIT_PLAYLIST_SUCCEEDED,
    REMOVE_MUSIC_FROM_PLAYLIST_FAILED,
    REMOVE_MUSIC_FROM_PLAYLIST_FAILED_MUSIC_NOT_IN_PLAYLIST,
    REMOVE_MUSIC_FROM_PLAYLIST_FAILED_PLAYLIST_NOT_FOUND,
    REMOVE_MUSIC_FROM_PLAYLIST_SUCCEEDED,
    SERVER_URL
} from "./apiSettings"
import uuid from "react-native-uuid"
import { getMusic } from "./musicApi"
// playlist를 등록합니다.
export const createPlaylist = async (playlist) => {
    const playlistUuid = uuid.v4()
    let newPlaylist = playlist
    newPlaylist.uuid = playlistUuid

    await axios.post(SERVER_URL + "/playlists", newPlaylist)
    return playlistUuid
}

// playlistUuid에 해당하는 playlist를 가져옵니다.
export const getPlaylist = async (playlistUuid) => {
    const response = await axios.get(SERVER_URL + "/playlists/" + playlistUuid)

    if (!response) {
        return {}
    }

    return response.data
}

// playlist를 전부 가져옵니다.
export const getPlaylists = async () => {
    const response = await axios.get(SERVER_URL + "/playlists")

    if (!response) {
        return []
    }

    return response.data
}

// playlistUuid에 해당하는 playlist를 newPlaylist로 수정합니다.
export const editPlaylist = async (playlistUuid, newPlaylist) => {
    const response = await axios.put(
        SERVER_URL + "/playlists/" + playlistUuid,
        newPlaylist
    )

    if (!response) {
        return EDIT_PLAYLIST_FAILED
    }

    return EDIT_PLAYLIST_SUCCEEDED
}

// playlistUuid에 해당하는 playlist를 삭제합니다.
export const deletePlaylist = async (playlistUuid) => {
    const response = await axios.delete(
        SERVER_URL + "/playlists/" + playlistUuid
    )

    if (!response) {
        return DELETE_PLAYLIST_FAILED
    }

    return DELETE_PLAYLIST_SUCCEEDED
}

// playlistUuid에 해당하는 playlist에 musicUuid에 해당하는 music을 추가합니다.
export const addMusicToPlaylist = async (playlistUuid, musicUuid) => {
    const playlist = await getPlaylist(playlistUuid)
    if (playlist === {} || !playlist) {
        return ADD_MUSIC_TO_PLAYLIST_FAILED_PLAYLIST_NOT_FOUND
    }

    const music = await getMusic(musicUuid)
    if (music === {} || !music) {
        return ADD_MUSIC_TO_PLAYLIST_FAILED_MUSIC_NOT_FOUND
    }

    playlist.content.push(musicUuid)

    const response = await editPlaylist(playlistUuid, playlist)
    if (!response || response === EDIT_PLAYLIST_FAILED) {
        return ADD_MUSIC_TO_PLAYLIST_FAILED
    }

    return ADD_MUSIC_TO_PLAYLIST_SUCCEEDED
}

// playlistUuid에 해당하는 playlist에서 musicUuid에 해당하는 music을 삭제합니다.
export const removeMusicFromPlaylist = async (playlistUuid, musicUuid) => {
    const playlist = await getPlaylist(playlistUuid)
    if (playlist === {} || !playlist) {
        return REMOVE_MUSIC_FROM_PLAYLIST_FAILED_PLAYLIST_NOT_FOUND
    }

    const musicInPlaylist = playlist.content.includes(musicUuid)
    if (!musicInPlaylist) {
        return REMOVE_MUSIC_FROM_PLAYLIST_FAILED_MUSIC_NOT_IN_PLAYLIST
    }

    playlist.content = playlist.content.filter((mId) => mId !== musicUuid)

    const response = await editPlaylist(playlistUuid, playlist)
    if (!response || response == EDIT_PLAYLIST_FAILED) {
        return REMOVE_MUSIC_FROM_PLAYLIST_FAILED
    }

    return REMOVE_MUSIC_FROM_PLAYLIST_SUCCEEDED
}
