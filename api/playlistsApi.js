// Playlists API

// playlist를 등록합니다.
export const createPlaylist = (playlist) => {
    return "uuid"
}

// playlistUuid에 해당하는 playlist를 가져옵니다.
export const getPlaylist = (playlistUuid) => {
    return {
        uuid: playlistUuid,
        content: []
    }
}

// playlist를 전부 가져옵니다.
export const getPlaylists = () => {
    return []
}

// playlistUuid에 해당하는 playlist를 newPlaylist로 수정합니다.
export const editPlaylist = (playlistUuid, newPlaylist) => {
    return "성공"
}

// playlistUuid에 해당하는 playlist를 삭제합니다.
export const deletePlaylist = (playlistUuid) => {
    return "성공"
}
