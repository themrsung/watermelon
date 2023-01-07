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
    justify-content: space-between;
    align-items: center;
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
    width: 60;
    position: absolute;
    top: 25%;
    right: 0;
`

const AllView = styled.Text``

export default function CurrentMusic() {
    return (
        <Container>
            <TopCategory>
                <CurrentMusicTitle>최신음악</CurrentMusicTitle>

                <ButtonWrap>
                    <CategoryBtn>
                        <CategoryTitle
                            style={{
                                color: "#72964B",
                                fontSize: 12,
                                fontWeight: "bold"
                            }}
                        >
                            전체
                        </CategoryTitle>
                        <Line />
                    </CategoryBtn>

                    <CategoryBtn>
                        <CategoryTitle
                            style={{
                                color: "#9ABC74",
                                fontSize: 12
                            }}
                        >
                            국내
                        </CategoryTitle>
                        <Line />
                    </CategoryBtn>

                    <CategoryBtn>
                        <CategoryTitle
                            style={{
                                color: "#9ABC74",
                                fontSize: 12
                            }}
                        >
                            해외
                        </CategoryTitle>
                    </CategoryBtn>
                </ButtonWrap>

                <AllView>전체보기</AllView>
            </TopCategory>
        </Container>
    )
}