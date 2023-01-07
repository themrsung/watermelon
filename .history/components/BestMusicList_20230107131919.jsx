import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
`
const FlatList = styled.FlatList``

const FlatListWrap = styled.View``

const BestMusicWrap = styled.View`
    width: 120px;
    padding: 20px;
    box-sizing: border-box;
    background-color: yellow;

    position: relative;
`

export default function BestMusicList() {
    const data = [
        {
            Number: 1,
            image: <Image source={require("../assets/image6.png")} />,
            title: "Ditto",
            singer: "- NewJeans"
        },
        {
            Number: 2,
            image: <Image source={require("../assets/image6.png")} />,
            title: "OMG",
            singer: "- NewJeans"
        },
        {
            Number: 3,
            image: <Image source={require("../assets/image6.png")} />,
            title: "Hype boy",
            singer: "- NewJeans"
        },
        {
            Number: 4,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        }
    ] //길이가 긴 Array 라고 가정

    return (
        <Container>
            <FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                //showsHorizontalScrollIndicator={false}
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
                                <BestMusicNumber>{item.Number}</BestMusicNumber>
                                <BestMusicTitle>{item.title}</BestMusicTitle>
                                <BestMusicSingle>{item.singer}</BestMusicSingle>
                            </TextWrap>
                        </BestMusicWrap>
                    </FlatListWrap>
                )}
            />
        </Container>
    )
}
