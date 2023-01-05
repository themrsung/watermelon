import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    height: auto;
`

const TitleWrap = styled.View`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: yellow;
`

const Title = styled.Text`
    text-align: center;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>
        </Wrap>
    )
}
