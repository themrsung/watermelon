import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    background-color: yellow;
`
const Time = styled.Text``

export default function BestMusic() {
    return (
        <Container>
            <Time>오늘 20 : 00 기준</Time>
        </Container>
    )
}
