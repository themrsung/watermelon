import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    background-color: yellow;
`

const EventBannerTitleWrap = styled.View`
    width: 100%;
`

const EventBannerTitle = styled.Text`
    color: #5aa469;
`

export default function EventBannerList() {
    return (
        <Wrap>
            <EventBannerTitleWrap>
                <EventBannerTitle>2023년 신년운쏭 이벤트</EventBannerTitle>
            </EventBannerTitleWrap>
        </Wrap>
    )
}
