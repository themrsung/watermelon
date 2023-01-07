import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 100px;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    background-color: yellow;
`

const TopCategory = styled.View`
    display: flex;
    flex-direction: row;
`

const CurrentMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

const ButtonWrap = styled.View``

export default function CurrentMusic() {
    return (
        <Container>
            <TopCategory>
                <CurrentMusicTitle>최신음악</CurrentMusicTitle>

                <ButtonWrap></ButtonWrap>
            </TopCategory>
        </Container>
    )
}
