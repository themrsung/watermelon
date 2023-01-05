import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    height: auto;
`

const TitleWrap = styled.View`
    width: 100%;
    padding: 18px;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
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
