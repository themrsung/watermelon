import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import EventBannerList from "./EventBannerList"

const Wrap = styled.View`
    width: 100%;
`

export default function EventBanner() {
    return (
        <Wrap>
            <EventBannerList />
        </Wrap>
    )
}
