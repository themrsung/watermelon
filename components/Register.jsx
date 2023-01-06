import {} from "react-native"
import { useState } from "react"
import { register } from "../api/authApi"

export default function Register() {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const onRegister = () => {
        const response = register(userId, userPassword, userName, userEmail)
        console.log(response)
    }

    return (
        <View>
            <View>
                <Text>ID</Text>
                <TextInput
                    placeholder="id"
                    value={userId}
                    onChangeText={setUsetId}
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
            <View>
                <Text>Name</Text>
                <TextInput
                    placeholder="name"
                    value={userName}
                    onChangeText={setUserName}
                />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput
                    placeholder="email"
                    value={userEmail}
                    onChangeText={setUserEmail}
                />
            </View>
            <TouchableOpacity onPress={onRegister}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
