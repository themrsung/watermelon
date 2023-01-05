import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import FavoriteMusic from "./FavoriteMusic"
import EventBanner from "./EventBanner"

const ContentsWrap = styled.ScrollView`
    width: 100%;
`

export default function ScrollContents() {
    return (
        <ContentsWrap>
            <FavoriteMusic />

            <EventBanner />
        </ContentsWrap>
    )
}
