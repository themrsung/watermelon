import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 200px;
    padding: 30px;
    box-sizing: border-box;
    background-color: yellow;
`

const Copyright = styled.Text``

export default function Footer() {
    return (
        <Container>
            <Copyright></Copyright>
        </Container>
    )
}
