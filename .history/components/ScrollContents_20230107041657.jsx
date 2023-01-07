import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import FavoriteMusic from "./FavoriteMusic"
import EventBanner from "./EventBanner"
import UserProfile from "./UserProfile"
import CurrentMusic from "./CurrentMusic"

const ContentsWrap = styled.View`
    width: 100%;
    border: 1px solid pink;
`

export default function ScrollContents() {
    return (
        <ContentsWrap>
            <FavoriteMusic />
            <EventBanner />
            <CurrentMusic />
            {/* <UserProfile /> */}
        </ContentsWrap>
    )
}
