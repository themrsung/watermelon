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
    padding: 18px 18px 18px 0;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`
const SlideView = styled.View`
    width: 200px;
    height: 200px;
    background-color: #d6e8c3;
    opacity: 0.6;
    border: 1px solid #276e38;
    border-radius: 20px;
`

const PlaylistTitle = styled.Text`
    font-size: 14px;
    color: #80ae4b;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>
            <Swiper autoplay showsPagination={false} width={350} height={200}>
                <SlideView>
                    <PlaylistTitle>이번주 인기 플레이리스트</PlaylistTitle>
                </SlideView>
            </Swiper>
        </Wrap>
    )
}