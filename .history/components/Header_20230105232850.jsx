import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    padding: 10px;
    background-color: yellow;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoImg = styled.Image`
    width: 60px;
    height: 60px;
`

const MenuButton = styled.TouchableOpacity``

const MenuBarImg = styled.Image`
    width: 24px;
    height: 24px;
`

export default function Header() {
    return (
        <Container>
            <LogoImg source={require("../assets/LightBG.png")} />

            <MenuButton>
                <MenuBarImg source={require("../assets/menu_bar.png")} />
            </MenuButton>
        </Container>
    )
}
