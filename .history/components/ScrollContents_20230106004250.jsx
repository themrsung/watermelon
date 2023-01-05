import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const ContentsWrap = styled.ScrollView`
    width: 100%;
    height: 700px;
`
const Text = styled.Text``

export default function ScrollContents() {
    return (
        <ContentsWrap>
            <Text>내가 듣고 싶은 음악</Text>
        </ContentsWrap>
    )
}
