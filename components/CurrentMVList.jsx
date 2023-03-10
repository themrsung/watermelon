import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
`
const FlatList = styled.FlatList``

const FlatListWrap = styled.View``

const CurrentMVWrap = styled.View`
    width: 100%;
    height: 230px;

    position: relative;
`

const CurrentMVImage = styled.Text`
    width: 230px;
    height: 210px;
    margin-top: -67px;
`

const TextWrap = styled.View`
    position: absolute;
    top: 64%;
    left: 0;
`

const CurrentMVTitle = styled.Text`
    color: #5aa469;
    font-size: 11px;
    font-weight: 600;
`

const CurrentMVSinger = styled.Text`
    color: #a1c37a;
    font-size: 10px;
`

const Time = styled.Text`
    color: white;
    font-size: 12px;

    position: absolute;
    top: 51%;
    left: 10px;

    z-index: 999999;
`

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
                ItemSeparatorComponent={<View style={{ margin: 5 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <FlatListWrap key={i}>
                        <CurrentMVWrap>
                            <Time>03:21</Time>
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
