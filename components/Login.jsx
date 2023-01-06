import {} from "react-native"
import { useState } from "react"
import { login } from "../api/authApi"

export default function Login() {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const onLogin = () => {
        const response = login(userId, userPassword)
        console.log(response)
    }

    return (
        <View>
            <View>
                <Text>ID</Text>
                <TextInput
                    placeholder="id"
                    value={userId}
                    onChangeText={setUserId}
                />
            </View>
            <View>
                <Text>PW</Text>
                <TextInput
                    type="password"
                    placeholder="password"
                    value={userPassword}
                    onChangeText={setUserPassword}
                />
            </View>
            <TouchableOpacity onPress={onLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
