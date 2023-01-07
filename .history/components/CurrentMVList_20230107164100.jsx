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
    height: 260px;

    box-sizing: border-box;

    position: relative;
`

const CurrentMVImage = styled.Text`
    width: 230px;
    height: 210px;
    margin-top: -60px;
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
