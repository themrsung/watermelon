import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import Swiper from "react-native-swiper"

export default function EventBannerList() {
    return (
        <Swiper
            autoplay
            showsPagination={false}
            width={350}
            height={400}
        ></Swiper>
    )
}
