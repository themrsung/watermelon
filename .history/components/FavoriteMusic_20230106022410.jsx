import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import Swiper from "react-native-swiper"

const Wrap = styled.View`
    width: 100%;
    height: auto;
    padding: 0 20px;
`

const TitleWrap = styled.View`
    width: 100%;
    padding: 18px 18px 4px 0;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>
            <Swiper
                autoplay
                showsPagination={false}
                width={350}
                height={400}
            ></Swiper>
        </Wrap>
    )
}
