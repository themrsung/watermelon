import React from "react"
import { IMAGE } from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

export default function BestMusicList() {
    const data = [
        {
            Number: 1,
            image: <Image source={require("../assets/image6.png")} />,
            title: "Ditto",
            singer: "- NewJeans"
        },
        {
            Number: 2,
            image: <Image source={require("../assets/image6.png")} />,
            title: "OMG",
            singer: "- NewJeans"
        },
        {
            Number: 3,
            image: <Image source={require("../assets/image6.png")} />,
            title: "Hype boy",
            singer: "- NewJeans"
        },
        {
            Number: 4,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        }
    ] //길이가 긴 Array 라고 가정

    return <Container></Container>
}
