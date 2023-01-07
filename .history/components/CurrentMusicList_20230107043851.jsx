import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

const FavoriteMusicTitle = styled.Text`
    color: #80ae4b;
    font-size: 15px;
`

const FavoriteMusicList = styled.View`
    width: 200px;
    height: 200px;
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

    z-index: 99999;
`

const PlayIconImg = styled.Image`
    width: 100%;
    height: 100%;
`

const FlatListWrap = styled.View``

const FlatList = styled.FlatList``

export default function CurrentMusicList() {
    const data = [
        {
            image: <Image source={require("../assets/image3.png")} />,
            title: "신이 했어",
            singer: "UNEDUCATED KID"
        },
        {
            image: <Image source={require("../assets/image4.png")} />,
            title: "BOYS PLANET - 난 ...",
            singer: "BOYS PLANET"
        },
        {
            image: <Image source={require("../assets/image5.png")} />,
            title: "Espero 1st, Roman...",
            singer: "에스페로, 김호중"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Container>
            <FlatList
                horizontal
                //showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{ margin: 6 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <FlatListWrap key={i}>
                        <FavoriteMusicImage>{item.image}</FavoriteMusicImage>
                        <FavoriteMusicTitle>{item.title}</FavoriteMusicTitle>
                        <FavoriteMusicList>
                            <PlayButton>
                                <PlayIconImg
                                    source={require("../assets/play.png")}
                                />
                            </PlayButton>

                            <TextWrap>
                                <ContentTitle>{item.singer}</ContentTitle>
                                <ContentCategory>
                                    {item.category}
                                </ContentCategory>
                            </TextWrap>
                        </FavoriteMusicList>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
