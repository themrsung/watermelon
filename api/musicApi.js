// Music API

import axios from "axios"
import { SERVER_URL } from "./serverUrl"
import uuid from "react-native-uuid"

// 글쓰기입니다. 오류내시면 서버에 그대로 들어가요.
export const createMusic = (music) => {
    const musicUuid = uuid.v4()
    let newMusic = music
    newMusic.uuid = musicUuid

    axios.post(SERVER_URL + "/musics/" + musicUuid, newMusic)
}

// 글 1개를 가져옵니다.
export const getMusic = async (uuid) => {
    const response = await axios.get(SERVER_URL + "/musics/" + uuid)
    if (response) {
        return response.data
    }
}

// 글을 전부 가져옵니다. filter는 알아서 돌리세요ㅋ
export const getMusics = async () => {
    const response = await axios.get(SERVER_URL + "/musics")
    if (response) {
        return response.data
    }
}

// uuid에 해당하는 글을 두번째 파라미터의 글로 수정합니다.
export const editMusic = (uuid, newMusic) => {
    axios.patch(SERVER_URL + "/musics/" + uuid, newMusic)
}

// uuid에 해당하는 글을 삭제합니다.
export const deleteMusic = (uuid) => {
    axios.delete(SERVER_URL + "/musics/" + uuid)
}
