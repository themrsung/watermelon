import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import FavoriteMusic from "./FavoriteMusic"
import EventBanner from "./EventBanner"
import UserProfile from "./UserProfile"
import CurrentMusic from "./CurrentMusic"
import BestMusic from "./BestMusic"

const ContentsWrap = styled.ScrollView`
    width: 100%;
`

export default function ScrollContents() {
    return (
        <ContentsWrap>
            <FavoriteMusic />
            <EventBanner />
<<<<<<< HEAD
            <UserProfile />
=======
            <CurrentMusic />
            <BestMusic />
            {/* <UserProfile /> */}
>>>>>>> 87a2f2e7e39a79725ddd92b66bc9b723ae78a4bd
        </ContentsWrap>
    )
}
