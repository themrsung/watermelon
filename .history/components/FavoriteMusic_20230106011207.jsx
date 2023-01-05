import React, { useState } from "react"
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
    const [slideTime, setSlideTime] = useState(1) // 초기 슬라이딩 시간 1초
    useEffect(() => {
        const autoTimer = setTimeout(() => setSlideTime(8), 1000) // 1초 후에 slideTime을 8초로 바꾸고
        return () => clearTimeout(autoTimer)
    }, [])
    console.log(slideTime)

    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>

                <Swiper
                    autoplay
                    showsPagination={false}
                    width={300}
                    height={250}
                    autoplayTimeout={time}
                >
                    <MusicImg source={require("../assets/coupon.png")} />
                    />
                </Swiper>
            </TitleWrap>
        </Wrap>
    )
}
