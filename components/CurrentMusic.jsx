import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import CurrentMusicList from "./CurrentMusicList"

const Container = styled.View`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-bottom: 40px;
    // background-color: yellow;
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
    width: 60px;
    height: 26px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;
`

const CategoryTitle = styled.Text`
    color: black;
`

const Line = styled.View`
    width: 1px;
    height: 14px;
    background-color: #9abc74;
    position: absolute;
    top: 25%;
    right: 0;
`

const AllViewBtn = styled.TouchableOpacity``

const AllViewText = styled.Text`
    color: #9abc74;
    font-size: 13px;
`

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

                <AllViewBtn>
                    <AllViewText>전체보기</AllViewText>
                </AllViewBtn>
            </TopCategory>
            <CurrentMusicList />
            <CurrentMusicList />
        </Container>
    )
}
