import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    // background-color: yellow;
`

const EventBannerTitleWrap = styled.View`
    width: 100%;
`

const EventBannerTitle = styled.Text`
    color: #5aa469;
    font-size: 13px;
`

const EventBannerImg = styled.Image`
    width: 100%;
    height: 100px;
    margin-top: 10px;
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
