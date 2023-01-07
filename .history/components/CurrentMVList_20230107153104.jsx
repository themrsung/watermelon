import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

export default function CurrentMVList() {
    const data = [
        {
            image: <Image source={require("../assets/image7.png")} />,
            title: "aespa Life’s Too Short (English Ver.)",
            singer: "aespa"
        },
        {
            image: <Image source={require("../assets/image8.png")} />,
            title: "SHINee The 7th Album Repackage ‘Atlantis",
            singer: "샤이니"
        }
    ] //길이가 긴 Array 라고 가정
    return <Container></Container>
}
