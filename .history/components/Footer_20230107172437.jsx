import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 200px;
    padding: 30px;
    box-sizing: border-box;
    // background-color: yellow;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const CopyrightBtn = styled.TouchableOpacity`
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Copyright = styled.Text`
    margin-right: 6px;

    text-align: center;
    color: #5aa469;
    font-size: 11px;
    font-weight: 500;
`

const CopyrightIconImg = styled.Image`
    width: 13px;
    height: 13px;
`

const Source = styled.Text`
    margin-top: 6px;

    color: #a1c37a;
    font-size: 9px;
`

export default function Footer() {
    return (
        <Container>
            <CopyrightBtn>
                <Copyright>(주)WMelon 엔터테이먼트 사업자정보</Copyright>
                <CopyrightIconImg source={require("../assets/more.png")} />
            </CopyrightBtn>

            <Source>ⓒ WMelon Entertainmnet Corp.</Source>
        </Container>
    )
}
