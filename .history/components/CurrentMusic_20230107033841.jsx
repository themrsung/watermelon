import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 100px;
    padding: 0 0 0 20px;
    box-sizing: border-box;
    background-color: yellow;
`

const TopCategory = styled.View`
    display: flex;
    flex-direction: row;
`

const CurrentMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

const ButtonWrap = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CategoryBtn = styled.TouchableOpacity`
    width: 40px;
    height: 40px;

    position: relative;
    &::after {
        content: "";
        width: 1px;
        height: 14px;
        background-color: black;

        position: absolute;
        right: 0;
    }
`

const CategoryTitle = styled.Text``

export default function CurrentMusic() {
    return (
        <Container>
            <TopCategory>
                <CurrentMusicTitle>최신음악</CurrentMusicTitle>

                <ButtonWrap>
                    <CategoryBtn>
                        <CategoryTitle>전체</CategoryTitle>
                    </CategoryBtn>

                    <CategoryBtn>
                        <CategoryTitle>국내</CategoryTitle>
                    </CategoryBtn>

                    <CategoryBtn>
                        <CategoryTitle>해외</CategoryTitle>
                    </CategoryBtn>
                </ButtonWrap>
            </TopCategory>
        </Container>
    )
}
