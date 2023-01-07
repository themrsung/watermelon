import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 500px;
    background-color: bisque;
`

const FavoriteMusicTitle = styled.Text`
    color: #80ae4b;
    font-size: 15px;
`

const FavoriteMusicList = styled.View`
    width: 200px;
    height: 100%;
    margin-top: 5px;
    box-sizing: border-box;
    position: relative;
`
const FavoriteMusicImage = styled.Text`
    width: 300px;
    height: 300px;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 9999999;
`

const TextWrap = styled.View`
    margin-top: 130px;
`

const ContentTitle = styled.Text`
    color: #5aa469;
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
                        <FavoriteMusicList>
                            <FavoriteMusicImage>
                                {item.image}
                            </FavoriteMusicImage>
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
                        </FavoriteMusicList>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
