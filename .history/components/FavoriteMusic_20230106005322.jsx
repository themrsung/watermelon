import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
`

const TitleWrap = styled.View`
    width: 100%;
    height: 40px;
    background-color: yellow;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap></TitleWrap>
        </Wrap>
    )
}
