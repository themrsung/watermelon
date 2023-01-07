import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    //background-color: #ffcbea;
`
const Time = styled.Text`
    font-size: 14px;
    color: #9abc74;
`
const TopTitleWrap = styled.View`
    width: 100%;
`

const BestMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 900;
`
const IconImg = styled.Image``

export default function BestMusic() {
    return (
        <Container>
            <Time>오늘 20 : 00 기준</Time>
            <TopTitleWrap>
                <BestMusicTitle>WMelonTOP100</BestMusicTitle>
                <IconImg source={require("../assets/chart.png")} />
            </TopTitleWrap>
        </Container>
    )
}
