import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import CurrentMVList from "./CurrentMVList"

const Container = styled.View`
    width: 100%;
    height: 230px;
    padding: 0 20px;
    box-sizing: border-box;
    // background-color: #ffffe9;
`

const CurrentMVTitleWrap = styled.View`
    width: 100%;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

const AllViewBtn = styled.TouchableOpacity``

const AllViewText = styled.Text`
    color: #9abc74;
    font-size: 12px;
`

const CurrentMVTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 700;
`

const MVView = styled.View``

export default function CurrentMV() {
    return (
        <Container>
            <CurrentMVTitleWrap>
                <CurrentMVTitle>최신MV</CurrentMVTitle>
                <AllViewBtn>
                    <AllViewText>전체보기</AllViewText>
                </AllViewBtn>
            </CurrentMVTitleWrap>

            <MVView>
                <CurrentMVList />
            </MVView>
        </Container>
    )
}
