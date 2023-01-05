// Comments API

// musicUuid에 해당하는 글에 댓글을 작성합니다.
const writeComment = (musicUuid, comment) => {
    return "uuid"
}

// musicUuid에 해당하는 글에 댓글을 작성합니다.
const getComment = (commentUuid) => {
    return {
        uuid: commentUuid
    }
}

// musicUuid에 해당하는 글의 댓글을 전부 가져옵니다. filter는 알아서 돌리세요.
const getComments = (musicUuid) => {
    return []
}

// commentUuid에 해당하는 댓글을 두번째 파라미터의 댓글로 수정합니다.
const editComment = (commentUuid, newComment) => {
    return "성공"
}

// commentUuid에 해당하는 댓글을 삭제합니다.
const deleteComment = (commentUuid) => {
    return "성공"
}
