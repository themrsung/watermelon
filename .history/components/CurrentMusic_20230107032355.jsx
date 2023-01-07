import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 100px;
    background-color: yellow;
`

const CurrentMusicTitle = styled.Text``

export default function CurrentMusic() {
    return (
        <Container>
            <CurrentMusicTitle>최신음악</CurrentMusicTitle>
        </Container>
    )
}
