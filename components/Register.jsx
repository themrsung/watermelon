import {} from "react-native"

export default function Register() {
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
            <View>
                <Text>Name</Text>
                <TextInput placeholder="Name" />
            </View>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="email" />
            </View>
            <TouchableOpacity>Register</TouchableOpacity>
        </View>
    )
}
