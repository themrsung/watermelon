import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: yellow;
`
const Time = styled.Text`
    font-size: 40px;
`

export default function BestMusic() {
    return (
        <Container>
            <Time>오늘 20 : 00 기준</Time>
        </Container>
    )
}
