// Authentication API

import axios from "axios"
import { store } from "../redux/stores"
import { setId, clear } from "../redux/slices/currentSessionSlice"
// import currentSessionStore from "../store/currentSessionStore"
import {
    DELETE_USER_FAILED,
    DELETE_USER_SUCCEEDED,
    LOGIN_FAILED,
    LOGIN_SUCCEEDED,
    LOGOUT_SUCCEEDED,
    REGISTER_FAILED_GET_USERS_FAILED,
    REGISTER_FAILED_INVALID_USER,
    REGISTER_SUCCEEDED,
    SERVER_URL,
    UPDATE_USER_FAILED,
    UPDATE_USER_SUCCEEDED
} from "./apiSettings"

// 로그인하는 함수입니다. 알아서 쓰세요.
export const login = async (id, password) => {
    const users = await getUsers()
    const matchingUsers = users.filter((u) => u.id === id)
    if (matchingUsers.length <= 0) {
        // user not found
        return LOGIN_FAILED
    }

    const matchingUser = matchingUsers[0]
    if (matchingUser === {} || !matchingUser) {
        // user found, but not valid
        return LOGIN_FAILED
    }

    let hashedPassword = HashPassword.hashPassword(
        matchingUser.passwordHashVersion,
        password
    )

    if (hashedPassword !== matchingUser.password) {
        // wrong passwor
        return LOGIN_FAILED
    }

    // currentSessionStore.handleSetCurrentSession({
    //     id: id
    // })

    store.dispatch(setId(id))

    return LOGIN_SUCCEEDED
}

// 비번이 맞는지 확인합니다.
export const validatePassword = async (userId, password) => {
    const user = await getUser(userId)
    if (!user) {
        return false
    }

    const hashedPassword = HashPassword.hashPassword(
        user.passwordHashVersion,
        password
    )

    if (!hashedPassword || hashedPassword !== userId.password) {
        return false
    }

    return true
}

// 로그아웃입니다. 콜하시면 세션이 사라져요!
export const logout = () => {
    // currentSessionStore.handleClearCurrentSession()

    store.dispatch(clear())

    return LOGOUT_SUCCEEDED
}

// 회원을 가입시킵(?)니다. Raw password로 주시면 알아서 해싱됩니다.
export const register = async (id, password, name, email) => {
    const users = await getUsers()
    if (!users) {
        return REGISTER_FAILED_GET_USERS_FAILED
    }

    const user = {
        id: id,
        password: HashPassword.v1(password),
        name: name,
        email: email,
        passwordHashVersion: "v1"
    }

    if (!user) {
        return REGISTER_FAILED_INVALID_USER
    }

    await axios.post(SERVER_URL + "/users/" + id, user)
    return REGISTER_SUCCEEDED
}

// id에 해당하는 유저를 삭제합니다.
export const deleteUser = async (id) => {
    const response = await axios.delete(SERVER_URL + "/users/" + id)

    if (!response) {
        return DELETE_USER_FAILED
    }

    return DELETE_USER_SUCCEEDED
}

// id에 해당하는 유저를 newUser로 교체합니다.
export const updateUser = async (id, newUser) => {
    const response = await axios.put(SERVER_URL + "/users/" + id, newUser)

    if (!response) {
        return UPDATE_USER_FAILED
    }

    return UPDATE_USER_SUCCEEDED
}
// id에 해당하는 유저의 이메일로 비밀번호 재설정 메일을 보냅니다.
// (주의: 못 할 수도 있음. 가능하면 쓰지 마)
export const sendChangePasswordEmailToUser = (id) => {
    return "실패ㅋ"
}

// id에 해당하는 유저를 리턴합니다.
export const getUser = async (id) => {
    const response = await axios.get(SERVER_URL + "/users/" + id)

    if (!response) {
        return {}
    }

    return response.data
}

// 모든 user를 리턴합니다.
export const getUsers = async () => {
    const response = await axios.get(SERVER_URL + "/users")
    if (!response) {
        return []
    }

    return response.data
}

export class HashPassword {
    static v1(password) {
        let hash = 0
        for (let i = 0; i < password.length; i++) {
            let chr = password.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }

        return hash
    }

    static hashPassword(version, password) {
        switch (version) {
            case "v1":
                return HashPassword.v1(password)
            default:
                return HashPassword.v1(password)
        }
    }
}
