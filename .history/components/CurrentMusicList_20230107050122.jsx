import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 300px;
    background-color: bisque;
`

const FlatList = styled.FlatList``

const FlatListWrap = styled.View``

const CurrentMusicWrap = styled.View`
    width: 300px;
    height: 300px;
    background-color: brown;
`

const CurrentMusicImage = styled.Text``

const PlayButton = styled.TouchableOpacity``

const PlayIconImg = styled.Image``

const TextWrap = styled.View``

const FavoriteMusicTitle = styled.Text``

const ContentTitle = styled.Text``

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
                                    source={require("../assets/play.png")}
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
