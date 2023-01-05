import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    background-color: yellow;
`

const EventBannerTitle = styled.Text``

export default function EventBannerList() {
    return (
        <Wrap>
            <EventBannerTitle>2023년 신년운쏭 이벤트</EventBannerTitle>
        </Wrap>
    )
}
