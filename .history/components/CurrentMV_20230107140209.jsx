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

const CurrentMVTitleWrap = styled.View`
    width: 100%;
    background-color: blue;
    margin-bottom: 20px;
`

const CurrentMVTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 700;
`

export default function CurrentMV() {
    return (
        <Container>
            <CurrentMVTitleWrap>
                <CurrentMVTitle>최신MV</CurrentMVTitle>
            </CurrentMVTitleWrap>
        </Container>
    )
}
