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
const SlideView = styled.View`
    width: 200px;
`

const PlaylistTitle = styled.Text`
    font-size: 15px;
    color: #80ae4b;
`

const PlaylistView = styled.View`
    width: 300px;
    height: 300px;
    padding: 20px;
    background-color: rgba(214, 232, 195, 0.6);
    margin-top: 10px;
    border: 1px solid #276e38;
    border-radius: 14px;

    display: flex;
    flex-direction: row;
    justify-content: center;
`

const PlaylistImg = styled.Image`
    width: 70%;
    height: 70%;
`

export default function FavoriteMusic() {
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>
            <Swiper
                autoplay
                loop
                showsPagination={false}
                width={350}
                height={400}
                autoplayTimeout={2.5}
            >
                <SlideView>
                    <PlaylistTitle>이번주 인기 플레이리스트</PlaylistTitle>
                    <PlaylistView>
                        <PlaylistImg source={require("../assets/image1.png")} />
                    </PlaylistView>
                </SlideView>

                <SlideView>
                    <PlaylistTitle>이번주 인기 플레이리스트</PlaylistTitle>
                    <PlaylistView>
                        <PlaylistImg source={require("../assets/image1.png")} />
                    </PlaylistView>
                </SlideView>
            </Swiper>
        </Wrap>
    )
}
