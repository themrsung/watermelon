import React from "react"
import { Image, View } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
`
const FlatList = styled.FlatList``

const FlatListWrap = styled.View`
    width: 100%;
`

const BestMusicWrap = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(214, 232, 195, 0.3);
    margin-top: 10px;
    border: 1px solid #276e38;

    position: relative;
`

const BestMusicImage = styled.Text``

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
`
const BestMusicNumber = styled.Text``

const BestMusicTitle = styled.Text``

const BestMusicSingle = styled.Text``

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
        },
        {
            Number: 5,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        },
        {
            Number: 6,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        },
        {
            Number: 7,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        },
        {
            Number: 8,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        },
        {
            Number: 9,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        },
        {
            Number: 10,
            image: <Image source={require("../assets/image6.png")} />,
            title: "사건의 지평선",
            singer: "- 윤하 (YOUNHA)"
        }
    ] //길이가 긴 Array 라고 가정

    return (
        <Container>
            <FlatList
                //showsVerticalScrollIndicator={false}
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
