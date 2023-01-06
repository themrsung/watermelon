import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import Swiper from "react-native-swiper"

const Wrap = styled.View`
    width: 100%;
    height: auto;
`

const TitleWrap = styled.View`
    width: 100%;
    padding: 18px;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`
const MusicImg = styled.Image`
    width: 200px;
    height: 200px;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>

                <Swiper
                    autoplay
                    showsPagination={false}
                    width={300}
                    height={250}
                >
                    <MusicImg source={require("../assets/coupon.png")} />
                </Swiper>
            </TitleWrap>
        </Wrap>
    )
}