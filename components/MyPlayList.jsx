import React, { useEffect, useState } from "react"
import { Image, ImageBackground, TouchableOpacity, Text } from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import {
    HOME_NAME,
    MY_PLAYLIST2_NAME,
    PLAY_MUSIC_NAME
} from "../navigation/NavContainer"
import { getPlaylist } from "../api/playlistsApi"
import {
    getMusicMetadataFromYouTube,
    getMusicThumbnailLinkFromYouTube
} from "../api/musicApi"
import { useSelector } from "react-redux"
import { store } from "../redux/stores"
import { setMusic } from "../redux/slices/currentMusicSlice"

export default function PlaylistList() {
    const playlistUuid = useSelector((state) => state.currentPlaylist.playlist)

    const [playlist, setPlaylist] = useState([])
    const [plmd, setPlmd] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const fetchPlaylist = async () => {
        const pl = await getPlaylist(playlistUuid)
        if (!pl) {
            return
        }

        const nplmd = []

        for (let i = 0; i < pl.content.length; i++) {
            const md = await getMusicMetadataFromYouTube(pl.content[i])
            const t = await getMusicThumbnailLinkFromYouTube(pl.content[i])

            nplmd.push({
                ti: md.title,
                ar: md.artist,
                tu: t,
                uuid: pl.content[i]
            })
        }

        setPlmd(nplmd)
        setPlaylist(pl)

        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)

        fetchPlaylist()
    }, [playlistUuid])

    const navigation = useNavigation()

    // const [data, setData] = useState([
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "LOVE",
    //         singer: "릴러말즈(Leellarmarz)"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "예쁨 가득한 Eve",
    //         singer: "한요한, 김승민"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Mise-en-Scene",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Trip (Feat. Hannah)",
    //         singer: "릴러말즈(Leellamarz)"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Island",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "새삥(Prod.Zico)",
    //         singer: "지코(Zico)"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Missing You (Feat. 김윤아)",
    //         singer: "G-DRAGON"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Part Of Her",
    //         singer: "한요한,김승민"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "시간이 들겠지 (Feat Colde)",
    //         singer: "로꼬"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Sequence",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Sequence",
    //         singer: "IZ*ONE"
    //     }
    // ])

    //길이가 긴 Array 라고 가정

    return (
        <Container>
            <ImageBackground
                source={require("../assets/bg1.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <BgDark>
                    <MyPlayListWrap>
                        <MyPlayStartText>재생목록</MyPlayStartText>
                        <MyPlayListIconWrap2>
                            <MyPlaySettingBtn>
                                <Image
                                    source={require("../assets/settings.png")}
                                    style={{ width: 18, height: 18 }}
                                />
                            </MyPlaySettingBtn>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate(HOME_NAME)
                                }}
                            >
                                <Image
                                    source={require("../assets/bottom.png")}
                                    style={{ width: 18, height: 18 }}
                                />
                            </TouchableOpacity>
                        </MyPlayListIconWrap2>
                    </MyPlayListWrap>

                    <MyPlayListImgWrap>
                        <MyPlayListSongBtn>
                            <MyPlayListSong>곡</MyPlayListSong>
                            <MyPlayMusicImg
                                source={require("../assets/music.png")}
                            />
                        </MyPlayListSongBtn>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(MY_PLAYLIST2_NAME)
                            }}
                        >
                            <MyPlayList>플레이리스트</MyPlayList>
                        </TouchableOpacity>
                        <MyPlayListTalkBtn>
                            <MyPlayList>어학</MyPlayList>
                        </MyPlayListTalkBtn>
                    </MyPlayListImgWrap>

                    <PlaylistWrap>
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                            data={data}
                            renderItem={({ item, i }) => (
                                <FlatListMyPlay key={i}>
                                    <FlatListMyPlayLeft>
                                        <FlatListMyPlayImg>
                                            {item.image}
                                        </FlatListMyPlayImg>

                                        <FlatListMyPlayWrap>
                                            <MyPlayListMusicTitle>
                                                {item.title}
                                            </MyPlayListMusicTitle>
                                            <MyPlayListMusicSinger>
                                                {item.singer}
                                            </MyPlayListMusicSinger>
                                        </FlatListMyPlayWrap>
                                    </FlatListMyPlayLeft>

                                    <MyPlayListIconWrap>
                                        <MyPlayListIconBtn>
                                            <MyPlayListIconImg
                                                source={require("../assets/more3.png")}
                                            />
                                        </MyPlayListIconBtn>
                                    </MyPlayListIconWrap>
                                </FlatListMyPlay>
                            )}
                        /> */}
                        {isLoading && (
                            <Text style={{ color: "white" }}>Loading...</Text>
                        )}
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={plmd}
                            renderItem={({ item, i }) => (
                                <FlatListMyPlay key={i}>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 6
                                        }}
                                        source={{ uri: item.tu }}
                                    />

                                    <FlatListMyPlayWrap
                                        onPress={() => {
                                            navigation.navigate(PLAY_MUSIC_NAME)
                                            store.dispatch(setMusic(item.uuid))
                                        }}
                                    >
                                        <MyPlayListMusicTitle>
                                            {item.ti}
                                        </MyPlayListMusicTitle>
                                        <MyPlayListMusicSinger>
                                            {item.ar}
                                        </MyPlayListMusicSinger>
                                    </FlatListMyPlayWrap>

                                    <MyPlayListIconWrap>
                                        <MyPlayListIconBtn>
                                            <MyPlayListIconImg
                                                source={require("../assets/more3.png")}
                                            />
                                        </MyPlayListIconBtn>
                                    </MyPlayListIconWrap>
                                </FlatListMyPlay>
                            )}
                        />
                    </PlaylistWrap>

                    <ContainerFooter>
                        <MyPlayIconBtn
                            onPress={() => {
                                navigation.navigate(PLAY_MUSIC_NAME)
                            }}
                        >
                            <IconPictureImage
                                source={require("../assets/image6.png")}
                            />
                        </MyPlayIconBtn>

                        <MyPlayIconBtn>
                            <IconImage
                                source={require("../assets/play7.png")}
                            />
                        </MyPlayIconBtn>

                        <MyPlayIconBtn>
                            <IconPictureImage
                                source={require("../assets/play6.png")}
                            />
                        </MyPlayIconBtn>

                        <MyPlayIconBtn>
                            <IconImage
                                source={require("../assets/play8.png")}
                            />
                        </MyPlayIconBtn>

                        <MyPlayIconBtn>
                            <IconImage
                                source={require("../assets/volume2.png")}
                            />
                        </MyPlayIconBtn>
                    </ContainerFooter>
                </BgDark>
            </ImageBackground>
        </Container>
    )
}

const Container = styled.SafeAreaView`
    width: 100%;

    flex: 1;
`
const BgDark = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`

const MyPlayListWrap = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    //background-color: pink;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const MyPlayListIconWrap2 = styled.View`
    width: 30%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MyPlayStartText = styled.Text`
    /* margin-top: 20px; */

    color: white;
    font-size: 17px;
    font-weight: 700;
    margin-left: 140px;
`

const MyPlaySettingBtn = styled.TouchableOpacity`
    margin-left: 50px;
`

const MyPlayListImgWrap = styled.View`
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-bottom-style: solid;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
`

const MyPlayMusicImg = styled.Image`
    width: 12px;
    height: 12px;
`

const MyPlayListSongBtn = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const MyPlayListTalkBtn = styled.TouchableOpacity``

const MyPlayListSong = styled.Text`
    margin-right: 10px;
    color: #3ad13a;
    font-size: 15px;
    font-weight: 700;
`

const MyPlayList = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: 700;
`

const PlaylistWrap = styled.ScrollView`
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    //background-color: yellow;
`

const FlatList = styled.FlatList`
    margin-top: 10px;
`

const FlatListMyPlay = styled.View`
    width: 100%;
    height: 100px;
    padding: 4px;

    background-color: transparent;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const FlatListMyPlayLeft = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const FlatListMyPlayImg = styled.Text`
    width: 90px;
    height: 90px;
    margin-top: -12%;
`

const FlatListMyPlayWrap = styled.TouchableOpacity``

const MyPlayListMusicTitle = styled.Text`
    width: 200px;

    color: white;
    font-size: 14px;
`

const MyPlayListMusicSinger = styled.Text`
    width: 200px;

    color: #9a9e96;
    font-size: 12px;
`

const MyPlayListIconWrap = styled.View`
    width: 8%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MyPlayListIconBtn = styled.TouchableOpacity``

const MyPlayListIconImg = styled.Image`
    width: 20px;
    height: 20px;
    color: white;
`

const ContainerFooter = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgba(255, 255, 255, 0.4);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const MyPlayIconBtn = styled.TouchableOpacity``

const IconPictureImage = styled.Image`
    width: 40px;
    height: 40px;
`

const IconImage = styled.Image`
    width: 25px;
    height: 25px;
`
