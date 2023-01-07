import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Wrap = styled.View`
    width: 100%;
    height: auto;
    padding: 0 20px;
`

const TitleWrap = styled.View`
    width: 100%;
    padding: 18px 18px 4px 0;
`

const Title = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
`

const Text = styled.Text``

const TouchableOpacity = styled.TouchableOpacity``

const View = styled.View``

const Image = styled.Image``

const FlatList = styled.FlatList``

export default function FavoriteMusic() {
    const data = [
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Hype boy",
            singer: "NewJeans"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Mise-en-Scene",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Black Mamba",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Island",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Beware",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Forever",
            singer: "asspa"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>

            <Text>Panorama와(과) 비슷한 아티스트</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <View key={i}>
                        <View>
                            <Text>{item.image}</Text>
                        </View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.singer}</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <AntDesign
                                    name="pluscircleo"
                                    size={30}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </Wrap>
    )
}
