import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: yellow;
`

const CurrentMVTitleWrap = styled.View`
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AllViewBtn = styled.TouchableOpacity``

const AllView = styled.Text``

const CurrentMVTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 700;
`

export default function CurrentMV() {
    return (
        <Container>
            <CurrentMVTitleWrap>
                <CurrentMVTitle>최신MV</CurrentMVTitle>
                <AllViewBtn>
                    <AllView>전체보기</AllView>
                </AllViewBtn>
            </CurrentMVTitleWrap>
        </Container>
    )
}
