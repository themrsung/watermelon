import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    // background-color: yellow;
`

const EventBannerTitleWrap = styled.View`
    width: 100%;
    height: 100px;
`

const EventBannerTitle = styled.Text`
    color: #5aa469;
    font-size: 13px;
`

const EventBannerImg = styled.View`
    width: 100%;
    height: 100%;
    margin-top: 10px;
`

export default function EventBannerList({ b }) {
    return (
        <Wrap>
            <EventBannerTitleWrap>
                <EventBannerTitle>{b.title}</EventBannerTitle>
                <EventBannerImg>
                    <Image
                        source={b.image}
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "stretch"
                        }}
                    />
                </EventBannerImg>
            </EventBannerTitleWrap>
        </Wrap>
    )
}
