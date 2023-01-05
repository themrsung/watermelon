// Authentication API

import axios from "axios"
import { SERVER_URL } from "./serverUrl"

// 로그인하는 함수입니다. 알아서 쓰세요.
export const login = (id, password) => {
    const users = getUsers()
    const matchingUsers = users.filter((u) => u.id === id)
    if (matchingUsers.length <= 0) {
        return "user not found"
    }

    const matchingUser = matchingUsers[0]
    if (!matchingUser) {
        return "user found, but not valid"
    }

    let hashedPassword = ""

    switch (matchingUser.passwordHashVersion) {
        case "v1":
            hashedPassword = HashPassword.v1(password)
            break
        default:
            hashedPassword = HashPassword.v1(password)
    }

    if (hashedPassword !== matchingUser.password) {
        return "wrong password"
    }

    return "login succeeded"
}

// 로그아웃입니다. 콜하시면 세션이 사라져요!
export const logout = () => {
    // clear session
    return "성공"
}

// 회원을 가입시킵(?)니다. Raw password로 주시면 알아서 해싱됩니다.
export const register = (id, password, name, email) => {
    // check if id is taken

    // check for valid id

    const user = {
        id: id,
        password: HashPassword.v1(password),
        name: name,
        email: email,
        passwordHashVersion: "v1"
    }

    axios.post(SERVER_URL + "/users/" + id, user)
}

// 회원을 가입시킵(?)니다.
export const deleteUser = (id) => {
    axios.delete(SERVER_URL + "/users/" + id)
}

// id에 해당하는 유저를 newUser로 교체합니다.
export const updateUser = (id, newUser) => {
    axios.put(SERVER_URL + "/users/" + id, newUser)
}
// id에 해당하는 유저의 이메일로 비밀번호 재설정 메일을 보냅니다.
// (주의: 못 할 수도 있음. 가능하면 쓰지 마)
export const sendChangePasswordEmailToUser = (id) => {
    return "실패ㅋ"
}

export const getUser = async (id) => {
    const response = await axios.get(SERVER_URL + "/users/" + id)
    if (response) {
        return response.data
    }
}

export const getUsers = async () => {
    const response = await axios.get(SERVER_URL + "/users")
    if (response) {
        return response.data
    }
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
}
