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

const FlatList = styled.FlatList`
    display: flex;
`

export default function FavoriteMusic() {
    const data = [
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>

            <FlatList
                showsVerticalScrollIndicator={false}
                // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <View key={i}>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.image}</Text>
                            <Text>{item.content}</Text>
                            <Text>{item.category}</Text>
                        </View>
                    </View>
                )}
            />
        </Wrap>
    )
}
