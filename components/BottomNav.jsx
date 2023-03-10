import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import { HOME_NAME, USER_PROFILE_NAME } from "../navigation/NavContainer"
import { logout } from "../api/authApi"
import { AntDesign } from "@expo/vector-icons"

const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 14px 20px;
    box-sizing: border-box;
    background-color: #5aa469;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const IconBtn = styled.TouchableOpacity``

const IconImage = styled.Image`
    width: 28px;
    height: 28px;
`

export default function BottomNav() {
    const navigation = useNavigation()
    return (
        <Container>
            <IconBtn
                onPress={() => {
                    navigation.navigate(HOME_NAME)
                }}
            >
                <IconImage source={require("../assets/home.png")} />
            </IconBtn>

            <IconBtn>
                <IconImage source={require("../assets/card.png")} />
            </IconBtn>

            <IconBtn>
                <IconImage source={require("../assets/movie.png")} />
            </IconBtn>

            <IconBtn
                onPress={() => {
                    logout()
                    navigation.navigate(HOME_NAME)
                }}
            >
                <AntDesign
                    name="logout"
                    size={24}
                    color="rgba(255,255,255,0.8)"
                />
            </IconBtn>

            <IconBtn
                onPress={() => {
                    navigation.navigate(USER_PROFILE_NAME)
                }}
            >
                <IconImage source={require("../assets/box.png")} />
            </IconBtn>
        </Container>
    )
}
