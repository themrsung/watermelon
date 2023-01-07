import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: yellow;
`

const CurrentMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

export default function CurrentMusic() {
    return (
        <Container>
            <CurrentMusicTitle>최신음악</CurrentMusicTitle>
        </Container>
    )
}
