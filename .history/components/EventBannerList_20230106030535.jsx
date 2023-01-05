import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    // background-color: yellow;
`

const EventBannerTitleWrap = styled.View`
    width: 100%;
`

const EventBannerTitle = styled.Text`
    color: #5aa469;
    font-size: 14px;
`

const EventBannerImg = styled.Image`
    width: 100%;
    height: 100px;
    margin-top: 20px;
    border: 1px solid #fff;
    border-radius: 6px;
`

export default function EventBannerList() {
    return (
        <Wrap>
            <EventBannerTitleWrap>
                <EventBannerTitle>2023년 신년운쏭 이벤트</EventBannerTitle>
                <EventBannerImg source={require("../assets/banner1.gif")} />
            </EventBannerTitleWrap>
        </Wrap>
    )
}
