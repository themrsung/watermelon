import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import FavoriteMusic from "./FavoriteMusic"
import EventBanner from "./EventBanner"
import UserProfile from "./UserProfile"
import CurrentMusic from "./CurrentMusic"

const ContentsWrap = styled.ScrollView`
    width: 100%;
    height: 700;
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
