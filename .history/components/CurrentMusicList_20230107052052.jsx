import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    background-color: #f9ead7;
`

const FlatList = styled.FlatList``

const FlatListWrap = styled.View``

const CurrentMusicWrap = styled.View`
    width: 120px;
    height: 180px;

    position: relative;
`

const CurrentMusicImage = styled.Text`
    width: 180px;
    height: 180px;

    position: absolute;
    top: -31%;
`

const PlayButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 6px;

    width: 18px;
    height: 18px;

    z-index: 99999;
`

const PlayIconImg = styled.Image`
    width: 100%;
    height: 100%;
`

const TextWrap = styled.View`
    position: absolute;
    top: 70%;
`

const FavoriteMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 12px;
    font-weight: bold;
`

const ContentTitle = styled.Text`
    color: #a1c37a;
    font-size: 10px;
`

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
                        <CurrentMusicWrap>
                            <CurrentMusicImage>{item.image}</CurrentMusicImage>
                            <PlayButton>
                                <PlayIconImg
                                    source={require("../assets/play2.png")}
                                />
                            </PlayButton>

                            <TextWrap>
                                <FavoriteMusicTitle>
                                    {item.title}
                                </FavoriteMusicTitle>
                                <ContentTitle>{item.singer}</ContentTitle>
                            </TextWrap>
                        </CurrentMusicWrap>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
