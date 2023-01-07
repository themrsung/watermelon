import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
`
const FlatList = styled.FlatList`
    margin-top: 20px;
`

const FlatListWrap = styled.View``

const CurrentMVWrap = styled.View`
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(214, 232, 195, 0.3);

    border: 1px solid #bfdbc6;
    border-radius: 10px;

    position: relative;
`

const CurrentMVImage = styled.Text`
    width: 100px;
    height: 100px;
`

const PlayButton = styled.TouchableOpacity`
    position: absolute;
    top: 70%;
    right: 3%;

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
    top: 58%;
    left: 24%;
`

const CurrentMVTitle = styled.Text``

const CurrentMVSinger = styled.Text``

export default function CurrentMVList() {
    const data = [
        {
            image: <Image source={require("../assets/image7.png")} />,
            title: "aespa Life’s Too Short (English Ver.)",
            singer: "aespa"
        },
        {
            image: <Image source={require("../assets/image8.png")} />,
            title: "SHINee The 7th Album Repackage ‘Atlantis",
            singer: "샤이니"
        },
        {
            image: <Image source={require("../assets/image7.png")} />,
            title: "aespa Life’s Too Short (English Ver.)",
            singer: "aespa"
        },
        {
            image: <Image source={require("../assets/image8.png")} />,
            title: "SHINee The 7th Album Repackage ‘Atlantis",
            singer: "샤이니"
        },
        {
            image: <Image source={require("../assets/image7.png")} />,
            title: "aespa Life’s Too Short (English Ver.)",
            singer: "aespa"
        },
        {
            image: <Image source={require("../assets/image8.png")} />,
            title: "SHINee The 7th Album Repackage ‘Atlantis",
            singer: "샤이니"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Container>
            <FlatList
                horizontal
                // showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{ marginBottom: 6 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <FlatListWrap key={i}>
                        <CurrentMVWrap>
                            <CurrentMVImage>{item.image}</CurrentMVImage>
                            <PlayButton>
                                <PlayIconImg
                                    source={require("../assets/play.png")}
                                />
                            </PlayButton>

                            <TextWrap>
                                <CurrentMVTitle>{item.title}</CurrentMVTitle>
                                <CurrentMVSinger>{item.singer}</CurrentMVSinger>
                            </TextWrap>
                        </CurrentMVWrap>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
