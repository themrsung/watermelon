import React, { useEffect, useState } from "react"
import { View, Image } from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import { PLAYLIST_INFO_NAME } from "../navigation/NavContainer"
import { getPlaylists } from "../api/playlistsApi"
import { getMusicThumbnailLinkFromYouTube } from "../api/musicApi"

const Wrap = styled.View`
    width: 100%;
    height: auto;
    padding: 0 20px;
    margin: 0 0 26px 0;
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

const FavoriteMusicTitle = styled.Text`
    color: #80ae4b;
    font-size: 15px;
`
const FavoriteMusicList = styled.View`
    width: 200px;
    height: 200px;
    padding: 16px;
    margin-top: 5px;
    box-sizing: border-box;
    background-color: rgba(214, 232, 195, 0.6);
    border: 1px solid #276e38;
    border-radius: 14px;

    position: relative;
`
const FavoriteMusicImage = styled.View`
    width: 160px;
    height: 160px;
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

const FlatListWrap = styled.TouchableOpacity``

const FlatList = styled.FlatList``

const FlatListBtn = styled.TouchableOpacity``

export default function FavoriteMusic() {
    const navigation = useNavigation()

    const [isLoaded, setIsLoaded] = useState(false)

    const [plts, setPlts] = useState([])

    const [playlists, setPlaylists] = useState([])

    const fetchPlaylists = async () => {
        const pls = await getPlaylists()
        if (!pls) {
            return
        }

        setPlaylists(pls)

        const setLoadedAt = pls.length - 1

        pls.forEach(async (pl, i) => {
            const t = await getMusicThumbnailLinkFromYouTube(pl.content[0])

            if (!t) {
                return
            }
            setPlts([...plts, t])
            if (i === setLoadedAt) {
                setIsLoaded(true)
            }
        })
    }

    useEffect(() => {
        fetchPlaylists()
    }, [])

    const data = [
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "이번주 인기 플레이리스트",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "오늘의 감상 테마 #재즈힙합",
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
            title: "오늘의 감상 테마 #재즈힙합",
            content: "깊어 가는 하얀 겨울, 따뜻...",
            category: "#겨울 #연말"
        }
    ] //길이가 긴 Array 라고 가정

    console.log(isLoaded, playlists, plts[0])

    return (
        <Wrap>
            <TitleWrap>
                <Title>내가 좋아할 음악</Title>
            </TitleWrap>

            <FlatListBtn>
                <FlatList
                    horizontal
                    //showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={<View style={{ margin: 6 }} />}
                    data={playlists}
                    renderItem={({ item, i }) => (
                        <FlatListWrap
                            key={i}
                            onPress={() => {
                                navigation.navigate(PLAYLIST_INFO_NAME)
                            }}
                        >
                            <FavoriteMusicTitle>
                                {item.title}
                            </FavoriteMusicTitle>
                            <FavoriteMusicList>
                                <PlayButton>
                                    <PlayIconImg
                                        source={require("../assets/play.png")}
                                    />
                                </PlayButton>

                                <FavoriteMusicImage>
                                    {plts.length - 1 > i && (
                                        <Image
                                            source={{ uri: plts[i] }}
                                            style={{ width: 160, height: 160 }}
                                        />
                                    )}
                                </FavoriteMusicImage>
                            </FavoriteMusicList>
                        </FlatListWrap>
                    )}
                />
            </FlatListBtn>
        </Wrap>
    )
}
