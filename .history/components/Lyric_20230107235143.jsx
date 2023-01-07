import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const ScrollView = styled.ScrollView`
    margin-top: 40px;
`

const LyricText = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    line-height: 30px;
    white-space: pre-wrap;
`

export default function Lyric() {
    return (
        <ScrollView>
            <LyricText>
                가나다라마바사아자차카타\n파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
            </LyricText>
        </ScrollView>
    )
}
