// Playlists API

import axios from "axios"
import {
    DELETE_PLAYLIST_FAILED,
    DELETE_PLAYLIST_SUCCEEDED,
    EDIT_PLAYLIST_FAILED,
    EDIT_PLAYLIST_SUCCEEDED,
    SERVER_URL
} from "./apiSettings"
import uuid from "react-native-uuid"
// playlist를 등록합니다.
export const createPlaylist = async (playlist) => {
    const playlistUuid = uuid.v4()
    let newPlaylist = playlist
    newPlaylist.uuid = playlistUuid

    await axios.post(SERVER_URL + "/playlists/" + playlistUuid, newPlaylist)
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
