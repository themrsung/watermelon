import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import EventBannerList from "./EventBannerList"
import Swiper from "react-native-swiper"

const Wrap = styled.View`
    width: 100%;
`

export default function EventBanner() {
    return (
        <Wrap>
            <Swiper autoplay showsPagination={false} width={350} height={400}>
                <EventBannerList />
            </Swiper>
        </Wrap>
    )
}
