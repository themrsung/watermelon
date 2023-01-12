import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"
import EventBannerList from "./EventBannerList"
import Swiper from "react-native-swiper"

const Wrap = styled.View`
    width: 100%;
    margin-bottom: 50px;
`

export default function EventBanner() {
    const Banner = [
        {
            number: 1,
            title: "2023년 신년운쏭 이벤트",
            image: require("../assets/banner1.gif")
        },
        {
            number: 2,
            title: "지금 바로 전화 걸기!",
            image: require("../assets/banner3.gif")
        }
    ]
    return (
        <Wrap>
            <Swiper
                autoplay
                showsPagination={false}
                width={"100%"}
                height={140}
            >
                {Banner.map((b) => {
                    return <EventBannerList b={b} key={b.number} />
                })}
            </Swiper>
        </Wrap>
    )
}
