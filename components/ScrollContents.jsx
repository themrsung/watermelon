import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import FavoriteMusic from "./FavoriteMusic"
import EventBanner from "./EventBanner"
import UserProfile from "./UserProfile"
import CurrentMusic from "./CurrentMusic"
import BestMusic from "./BestMusic"
import CurrentMV from "./CurrentMV"
import Footer from "./Footer"
import { LOGIN_NAME } from "../navigation/NavContainer"
import { useNavigation } from "@react-navigation/core"

const ContentsWrap = styled.ScrollView`
    width: 100%;
`

export default function ScrollContents() {
    // const navigation = useNavigation()
    // onPress={() => {
    //                 navigation.navigate(LOGIN_NAME)
    //             }}
    //         >

    return (
        <ContentsWrap>
            <FavoriteMusic />
            <EventBanner />
            <CurrentMusic />
            <BestMusic />
            <CurrentMV />
            <Footer />

            {/* <UserProfile /> */}
        </ContentsWrap>
    )
}
