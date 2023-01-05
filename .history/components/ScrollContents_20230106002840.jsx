import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const ContentsWrap = styled.ScrollView`
    width: 100%;
    border: 1px solid yellow;
    background-color: yellow;
`

export default function ScrollContents() {
    return <ContentsWrap></ContentsWrap>
}
