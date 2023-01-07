import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 200px;
    padding: 30px;
    box-sizing: border-box;
    background-color: yellow;
`

const Copyright = styled.Text`
    margin-top: 80px;
    text-align: center;
`

export default function Footer() {
    return (
        <Container>
            <Copyright>(주)WMelon 엔터테이먼트 사업자정보</Copyright>
        </Container>
    )
}
