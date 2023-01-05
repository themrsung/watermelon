// Music API

// 글쓰기입니다. 오류내시면 서버에 그대로 들어가요.
const createMusic = (music) => {
    return "uuid"
}

// 글 1개를 가져옵니다.
const getMusic = (uuid) => {
    return {
        uuid: uuid
    }
}

// 글을 전부 가져옵니다. filter는 알아서 돌리세요ㅋ
const getMusics = () => {
    return []
}

// uuid에 해당하는 글을 두번째 파라미터의 글로 수정합니다.
const editMusic = (uuid, newMusic) => {
    return "성공"
}

// uuid에 해당하는 글을 삭제합니다.
const deleteMusic = (uuid) => {
    return "성공"
}
