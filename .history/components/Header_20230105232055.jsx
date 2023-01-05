import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 80px;
    background-color: yellow;

    display: flex;
    flex-direction: row; ;
`

const LogoImg = styled.Image`
    width: 100px;
    height: 100px;
`

const MenuBarImg = styled.Image`
    width: 24px;
    height: 24px;
`

export default function Header() {
    return (
        <Container>
            <LogoImg source={require("../assets/LightBG.png")} />
            <MenuBarImg source={require("../assets/menu_bar.png")} />
        </Container>
    )
}
