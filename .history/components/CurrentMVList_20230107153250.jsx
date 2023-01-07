import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

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
                        <BestMusicWrap>
                            <BestMusicImage>{item.image}</BestMusicImage>
                            <PlayButton>
                                <PlayIconImg
                                    source={require("../assets/play.png")}
                                />
                            </PlayButton>

                            <TextWrap>
                                <BestMusicTitleWrap>
                                    <BestMusicNumber>
                                        {item.Number}
                                    </BestMusicNumber>
                                    <BestMusicTitle>
                                        {item.title}
                                    </BestMusicTitle>
                                </BestMusicTitleWrap>

                                <BestMusicSingle>{item.singer}</BestMusicSingle>
                            </TextWrap>
                        </BestMusicWrap>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
