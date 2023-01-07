import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    height: auto;
    padding: 0 20px;
`

const TitleWrap = styled.View`
    width: 100%;
    padding: 18px 18px 4px 0;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

const FavoriteMusicTitle = styled.Text`
    color: #80ae4b;
    font-size: 15px;
`
const FavoriteMusicList = styled.View`
    width: 200;
    height: 200;
    padding: 16px;
    margin-top: 5px;
    box-sizing: border-box;
    background-color: rgba(214, 232, 195, 0.6);
    border: 1px solid #276e38;
    border-radius: 14px;

    position: relative;
`
const FavoriteMusicImage = styled.Text`
    width: 160px;
    height: 160px;

    position: absolute;
    top: -16%;
    left: 27%;
`

const TextWrap = styled.View`
    margin-top: 130px;
`

const ContentTitle = styled.Text`
    color: #5aa469;
    text-align: center;
`

const ContentCategory = styled.Text`
    color: #80ae4b;
    font-size: 11px;
    text-align: center;
`

const PlayButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 18px;
    height: 18px;
`

const PlayIconImg = styled.Image`
    width: 100%;
    height: 100%;
`

const FlatListWrap = styled.View``

const FlatList = styled.FlatList``

export default function FavoriteMusic() {
    const data = [
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>

            <FlatList
                horizontal
                //showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{ margin: 6 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <FlatListWrap key={i}>
                        <FavoriteMusicTitle>{item.title}</FavoriteMusicTitle>
                        <FavoriteMusicList>
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,

                                    width: 18,
                                    height: 18
                                }}
                            >
                                <PlayIconImg
                                    source={require("../assets/play.png")}
                                />
                            </TouchableOpacity>

                            <FavoriteMusicImage>
                                {item.image}
                            </FavoriteMusicImage>

                            <TextWrap>
                                <ContentTitle>{item.content}</ContentTitle>
                                <ContentCategory>
                                    {item.category}
                                </ContentCategory>
                            </TextWrap>
                        </FavoriteMusicList>
                    </FlatListWrap>
                )}
            />
        </Wrap>
    )
}