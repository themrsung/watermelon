import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    background-color: yellow;
`

const EventBannerTitleWrap = styled.View``

const EventBannerTitle = styled.Text``

export default function EventBannerList() {
    return (
        <Wrap>
            <EventBannerTitleWrap>
                <EventBannerTitle>2023년 신년운쏭 이벤트</EventBannerTitle>
            </EventBannerTitleWrap>
        </Wrap>
    )
}
