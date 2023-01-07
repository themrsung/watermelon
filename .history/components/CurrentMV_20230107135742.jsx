import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
`

const CurrentMVTitleWrap = styled.View``

const CurrentMVTitle = styled.Text``

export default function CurrentMV() {
    return (
        <Container>
            <CurrentMVTitleWrap>
                <CurrentMVTitle>최신MV</CurrentMVTitle>
            </CurrentMVTitleWrap>
        </Container>
    )
}
