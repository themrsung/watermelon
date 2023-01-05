// Playlists API

import axios from "axios"
import { SERVER_URL } from "./serverUrl"
import uuid from "react-native-uuid"
// playlist를 등록합니다.
export const createPlaylist = (playlist) => {
    const playlistUuid = uuid.v4()
    let newPlaylist = playlist
    newPlaylist.uuid = playlistUuid

    axios.post(SERVER_URL + "/playlists/" + playlistUuid, newPlaylist)
}

// playlistUuid에 해당하는 playlist를 가져옵니다.
export const getPlaylist = async (playlistUuid) => {
    const response = await axios.get(SERVER_URL + "/playlists/" + playlistUuid)
    if (response) {
        return response.data
    }
}

// playlist를 전부 가져옵니다.
export const getPlaylists = async () => {
    const response = await axios.get(SERVER_URL + "/playlists")
    if (response) {
        return response.data
    }
}

// playlistUuid에 해당하는 playlist를 newPlaylist로 수정합니다.
export const editPlaylist = (playlistUuid, newPlaylist) => {
    axios.put(SERVER_URL + "/playlists/" + playlistUuid, newPlaylist)
}

// playlistUuid에 해당하는 playlist를 삭제합니다.
export const deletePlaylist = (playlistUuid) => {
    axios.delete(SERVER_URL + "/playlists/" + playlistUuid)
}
