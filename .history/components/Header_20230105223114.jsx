import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

const LogoImg = styled.Image`
    width: 100px;
    height: 40px;
`

export default function Header() {
    return (
        <Container>
            <LogoImg source={require("assets/LightBG.png")} />
        </Container>
    )
}
