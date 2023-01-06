import {} from "react-native"

export default function Login() {
    return (
        <View>
            <View>
                <Text>ID</Text>
                <TextInput placeholder="id" />
            </View>
            <View>
                <Text>PW</Text>
                <TextInput type="password" placeholder="password" />
            </View>
            <TouchableOpacity>Login</TouchableOpacity>
        </View>
    )
}
