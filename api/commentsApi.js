// Comments API

import axios from "axios"
import { SERVER_URL } from "./serverUrl"

// musicUuid에 해당하는 글에 댓글을 작성합니다.
export const writeComment = (musicUuid, comment) => {
    // add musicUuid to comment
    let newComment = comment
    newComment.musicUuid = musicUuid
    axios.post(SERVER_URL + "/comments", newComment)
}

// musicUuid에 해당하는 글에 댓글을 작성합니다.
export const getComment = async (commentUuid) => {
    const response = await axios.get(SERVER_URL + "/comments/" + commentUuid)
    if (response) {
        return response.data
    }
}

// musicUuid에 해당하는 글의 댓글을 전부 가져옵니다. filter는 알아서 돌리세요.
export const getComments = async (musicUuid) => {
    const response = await axios.get(SERVER_URL + "/comments")
    if (response) {
        const commentsMatchingMusicUuid = response.data.filter(
            (comment) => comment.musicUuid === musicUuid
        )
        if (commentsMatchingMusicUuid.length > 0) {
            return commentsMatchingMusicUuid
        }
    }
}

// commentUuid에 해당하는 댓글을 두번째 파라미터의 댓글로 수정합니다.
export const editComment = (commentUuid, newComment) => {
    axios.put(SERVER_URL + "/comments/" + commentUuid, newComment)
}

// commentUuid에 해당하는 댓글을 삭제합니다.
export const deleteComment = (commentUuid) => {
    axios.delete(SERVER_URL + "/comments/" + commentUuid)
}
