// Comments API

import axios from "axios"
import {
    DELETE_COMMENT_FAILED,
    DELETE_COMMENT_SUCCEEDED,
    EDIT_COMMENT_FAILED,
    EDIT_COMMENT_SUCCEEDED,
    SERVER_URL
} from "./apiSettings"
import uuid from "react-native-uuid"

// playlistUuid에 해당하는 글에 댓글을 작성합니다.
export const writeComment = async (playlistUuid, comment) => {
    // add playlistUuid to comment
    let newComment = comment
    newComment.playlistUuid = playlistUuid
    const newUuid = uuid.v4()
    newComment.uuid = newUuid
    await axios.post(SERVER_URL + "/comments", newComment)
    return newUuid
}

// playlistUuid에 해당하는 글에 댓글을 작성합니다.
export const getComment = async (commentUuid) => {
    const response = await axios.get(SERVER_URL + "/comments/" + commentUuid)

    if (!response) {
        return {}
    }

    return response.data
}

// playlistUuid에 해당하는 글의 댓글을 전부 가져옵니다. filter는 알아서 돌리세요.
export const getComments = async (playlistUuid) => {
    const response = await axios.get(SERVER_URL + "/comments")
    if (!response) {
        return []
    }

    const commentsMatchingPlaylistUuid = response.data.filter(
        (comment) => comment.playlistUuid === playlistUuid
    )

    if (commentsMatchingPlaylistUuid.length <= 0) {
        return []
    }

    return commentsMatchingPlaylistUuid
}

// commentUuid에 해당하는 댓글을 두번째 파라미터의 댓글로 수정합니다.
export const editComment = async (commentUuid, newComment) => {
    const response = await axios.put(
        SERVER_URL + "/comments/" + commentUuid,
        newComment
    )

    if (!response) {
        return EDIT_COMMENT_FAILED
    }

    return EDIT_COMMENT_SUCCEEDED
}

// commentUuid에 해당하는 댓글을 삭제합니다.
export const deleteComment = async (commentUuid) => {
    const response = await axios.delete(SERVER_URL + "/comments/" + commentUuid)

    if (!response) {
        return DELETE_COMMENT_FAILED
    }

    return DELETE_COMMENT_SUCCEEDED
}
