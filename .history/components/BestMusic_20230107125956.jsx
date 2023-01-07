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

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`
const BestMusicTitleWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

const BestMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 900;
`
const IconImg = styled.Image`
    width: 16px;
    height: 16px;
    margin-left: 4px;
`

const AllViewBtn = styled.TouchableOpacity``

const AllViewText = styled.Text`
    color: #9abc74;
    font-size: 12px;
`

const CategoryWrap = styled.View`
    // background-color: yellow;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
`

const CategoryBtn = styled.TouchableOpacity`
    padding: 4px 10px 4px 10px;
    margin-right: 6px;
    border: 1px solid #5aa469;
    border-radius: 20px;
`

const CategoryText = styled.Text`
    color: #5aa469;
    font-size: 13px;
`

const MoreBtn = styled.TouchableOpacity`
    padding: 4px 10px 4px 10px;
    border: 1px solid #0f501c;
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const MoreIconImg = styled.Image`
    width: 16px;
    height: 16px;
`

export default function BestMusic() {
    return (
        <Container>
            <Time>오늘 20 : 00 기준</Time>
            <TopTitleWrap>
                <BestMusicTitleWrap>
                    <BestMusicTitle>WMelonTOP100</BestMusicTitle>
                    <IconImg source={require("../assets/chart.png")} />
                </BestMusicTitleWrap>

                <AllViewBtn>
                    <AllViewText>전체보기</AllViewText>
                </AllViewBtn>
            </TopTitleWrap>

            <CategoryWrap>
                <CategoryBtn style={{ backgroundColor: "#5AA469" }}>
                    <CategoryText style={{ color: "#E5F8CF" }}>
                        NOW
                    </CategoryText>
                </CategoryBtn>

                <CategoryBtn>
                    <CategoryText>최신</CategoryText>
                </CategoryBtn>

                <CategoryBtn>
                    <CategoryText>좋아요 많은곡</CategoryText>
                </CategoryBtn>

                <MoreBtn style={{ border: "1px solid #0F501C" }}>
                    <CategoryText style={{ color: "#0F501C" }}>
                        테마 더보기
                    </CategoryText>
                    <MoreIconImg
                        source={require("../assets/more.png")}
                    ></MoreIconImg>
                </MoreBtn>
            </CategoryWrap>
        </Container>
    )
}
