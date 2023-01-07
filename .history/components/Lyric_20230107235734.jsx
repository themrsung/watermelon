import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const ScrollView = styled.ScrollView`
    margin-top: 40px;
`

const LyricText = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    line-height: 30px;
    white-space: pre-line;
`
const a = "가나다\n가나다"

export default function Lyric() {
    return (
        <ScrollView>
            <LyricText>{`${a}`}</LyricText>
        </ScrollView>
    )
}
