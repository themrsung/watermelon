import React, { useEffect, useState } from "react"
import { Alert, Image, Text } from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import { PLAY_MUSIC_NAME } from "../navigation/NavContainer"
import Comment from "./Comment"
import { useSelector } from "react-redux"
import { getPlaylist } from "../api/playlistsApi"
import {
    getMusicMetadataFromYouTube,
    getMusicThumbnailLinkFromYouTube
} from "../api/musicApi"
import { store } from "../redux/stores"
import { setMusic } from "../redux/slices/currentMusicSlice"

const Container = styled.ScrollView`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    //background-color: yellow;
`
const TopWrap = styled.View`
    width: 100%;
    //background-color: pink;

    display: flex;
    flex-direction: column;
`
const TopImgWrap = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const TopImg = styled.Image`
    width: 160px;
    height: 160px;
`

const PlayListTitle = styled.Text`
    margin-top: 20px;

    color: #5aa469;
    font-size: 17px;
    font-weight: 700;
`

const EditDate = styled.Text`
    margin-top: 4px;

    color: #80ae4b;
    font-size: 11px;
`

const Profile = styled.View`
    width: 100%;
    margin-top: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const ProfileLeft = styled.View`
    width: 48%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ProfileImg = styled.Image`
    width: 40px;
    height: 40px;
    margin-top: 4px;
    border-radius: 100px;
`

const Editor = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ProfileDJ1 = styled.Text`
    color: #f66363;
    font-size: 15px;
    font-weight: bold;
`

const ProfileDJ2 = styled.Text`
    color: #40894e;
    font-size: 14px;
`

const EditorCheckImg = styled.Image`
    width: 16px;
    height: 16px;
`

const FollowBtn = styled.TouchableOpacity`
    width: 18%;
    padding: 5px 8px;
    box-sizing: border-box;
    border: 1px solid #80ae4b;
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const PlusIconImg = styled.Image`
    width: 12px;
    height: 12px;
`

const PlusText = styled.Text`
    color: #80ae4b;
    font-size: 11px;
`

const DesWrap = styled.View`
    width: 100%;
`

const PlayListDes = styled.Text`
    width: 100%;
    margin-top: 14px;

    font-size: 12px;
    white-space: pre-line;
    color: #839c66;
`
const IconWrap = styled.View`
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const IconLeft = styled.View`
    width: 26%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const IconBtnWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const IconBtn = styled.TouchableOpacity``

const IconImg = styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`

const IconNumber = styled.Text`
    font-size: 11px;
    color: #656262;
`

const DownBtn = styled.TouchableOpacity``

const DownBtnImg = styled.Image`
    width: 16px;
    height: 16px;
`
const PlayWrap = styled.View`
    width: 100%;
    margin-top: 14px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const PlayBtnWrap = styled.TouchableOpacity`
    width: 49%;
    height: 40px;
    padding: 4px 10px;
    background-color: rgba(214, 323, 195, 0.6);
    box-sizing: border-box;
    border: 1px solid #276e38;
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const PlayBtnIcon = styled.Image`
    width: 17px;
    height: 17px;
    margin-right: 4px;
`

const PlayText = styled.Text`
    color: #276e38;
    font-size: 12px;
`

const PlaylistWrap = styled.View`
    width: 100%;
    margin: 20px 0;
    //background-color: yellow;
`

const PlayListTop = styled.View`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const AllSelectBtn = styled.TouchableOpacity`
    width: 17%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const AllSelectBtnImg = styled.Image`
    width: 14px;
    height: 14px;
`

const AllSelectText = styled.Text`
    font-size: 12px;
    color: #40894e;
`
const PlayListTopLeft = styled.View`
    width: 30%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const PlayListNumber = styled.Text`
    font-size: 13px;
    color: #40894e;
`

const PlayListTime = styled.Text`
    font-size: 13px;
    color: #40894e;
`

const FlatList = styled.FlatList`
    margin-top: 10px;
`

const FlatListWrap = styled.View`
    width: 100%;
    height: 100px;
    padding: 4px 10px;
    margin-bottom: 10px;
    background-color: rgba(214, 323, 195, 0.6);
    box-sizing: border-box;
    border: 1px solid #276e38;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const FlatListLeft = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const FlatListImg = styled.View`
    width: 90px;
    height: 90px;
    margin-top: -14%;
`

const FlatListTextBtn = styled.TouchableOpacity``

const FlatListTextWrap = styled.View``

const PlayListMusicTitle = styled.Text`
    color: #276e38;
    font-size: 14px;
`

const PlayListMusicSinger = styled.Text`
    color: #839c66;
    font-size: 12px;
`

const FlatListIconWrap = styled.View`
    width: 14%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const FlatListIconBtn = styled.TouchableOpacity``

const FlatListIconImg = styled.Image`
    width: 20px;
    height: 20px;
`

export default function PlaylistList() {
    const navigation = useNavigation()

    const currentPlaylistUuid = useSelector(
        (state) => state.currentPlaylist.playlist
    )

    const [a, setA] = useState(false)

    const [playlist, setPlaylist] = useState({})
    const [playlistMusics, setPlaylistMusics] = useState([])

    const fetchPlaylistAndMusics = async () => {
        const playlist = await getPlaylist(currentPlaylistUuid)
        if (!playlist) {
            return
        }

        setPlaylist(playlist)

        let musics = []
        playlist.content.forEach(async (c) => {
            const md = await getMusicMetadataFromYouTube(c)
            if (!md) {
                return
            }

            const t = await getMusicThumbnailLinkFromYouTube(c)
            if (!t) {
                return
            }

            musics.push({
                uuid: c,
                title: md.title,
                artist: md.artist,
                artistAndTitle: md.artistAndTitle,
                thumbnail: t
            })

            setPlaylistMusics(musics)
        })
    }

    useEffect(() => {
        fetchPlaylistAndMusics()
    }, [currentPlaylistUuid])

    const setIsLoadedAfterOneSecond = async () => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 1000)
    }

    useEffect(() => {
        setIsLoadedAfterOneSecond()
    }, [])

    // useEffect(() => {
    //     if (!playlist) {
    //         return
    //     }

    //     if (playlist.content.length === playlistMusics.length) {
    //         setIsLoaded(true)
    //     }
    // }, [playlistMusics])

    const onUnsupportedAction = () => {
        Alert.alert("지원되지 않는 기능입니다.")
    }

    const [isLoaded, setIsLoaded] = useState(false)

    // const data = [
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Sequence",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Hype boy",
    //         singer: "NewJeans"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Mise-en-Scene",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Black Mamba",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Island",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image10.png")} />,
    //         title: "Beware",
    //         singer: "IZ*ONE"
    //     },
    //     {
    //         image: <Image source={require("../assets/image9.png")} />,
    //         title: "Forever",
    //         singer: "asspa"
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
    // ]
    //길이가 긴 Array 라고 가정
    return isLoaded ? (
        <Container>
            <TopWrap>
                <TopImgWrap>
                    <TopImg
                        source={{
                            uri: playlistMusics[0].thumbnail
                        }}
                    />
                </TopImgWrap>

                <PlayListTitle>{playlist.title}</PlayListTitle>

                {/* <EditDate>3일 전 업데이트</EditDate> */}

                <Profile>
                    <ProfileLeft>
                        <ProfileImg source={require("../assets/image4.png")} />

                        <Editor>
                            <ProfileDJ1>DJ</ProfileDJ1>
                            <ProfileDJ2>워터멜론</ProfileDJ2>
                        </Editor>

                        <EditorCheckImg
                            source={require("../assets/check2.png")}
                        />
                    </ProfileLeft>

                    <FollowBtn
                        onPress={() => {
                            onUnsupportedAction()
                        }}
                    >
                        <PlusIconImg source={require("../assets/plus.png")} />
                        <PlusText>팔로우</PlusText>
                    </FollowBtn>
                </Profile>

                <DesWrap>
                    <PlayListDes>
                        {`${playlist.content.length}곡을 포함하고 있는 플레이리스트로, ${playlistMusics[0].artistAndTitle}로 시작하는 플레이리스트입니다.`}
                    </PlayListDes>
                </DesWrap>

                <IconWrap>
                    <IconLeft>
                        <IconBtnWrap>
                            <IconBtn
                                onPress={() => {
                                    onUnsupportedAction()
                                }}
                            >
                                <IconImg
                                    source={require("../assets/heart2.png")}
                                />
                            </IconBtn>
                            <IconNumber>3,647</IconNumber>
                        </IconBtnWrap>

                        <IconBtnWrap>
                            <IconBtn
                                onPress={() => {
                                    navigation.navigate(Comment)
                                }}
                            >
                                <IconImg
                                    source={require("../assets/comment.png")}
                                />
                            </IconBtn>
                            <IconNumber>33</IconNumber>
                        </IconBtnWrap>
                    </IconLeft>

                    <DownBtn>
                        <DownBtnImg source={require("../assets/down.png")} />
                    </DownBtn>
                </IconWrap>

                <PlayWrap>
                    <PlayBtnWrap
                        onPress={() => {
                            onUnsupportedAction()
                        }}
                    >
                        <PlayBtnIcon
                            source={require("../assets/shuffle3.png")}
                        />
                        <PlayText>셔플재생</PlayText>
                    </PlayBtnWrap>

                    <PlayBtnWrap
                        onPress={() => {
                            onUnsupportedAction()
                        }}
                    >
                        <PlayBtnIcon source={require("../assets/play.png")} />
                        <PlayText>전체재생</PlayText>
                    </PlayBtnWrap>
                </PlayWrap>
            </TopWrap>

            <PlaylistWrap>
                <PlayListTop>
                    <AllSelectBtn
                        onPress={() => {
                            onUnsupportedAction()
                        }}
                    >
                        <AllSelectBtnImg
                            source={require("../assets/check.png")}
                        />
                        <AllSelectText>전체선택</AllSelectText>
                    </AllSelectBtn>

                    <PlayListTopLeft>
                        <PlayListNumber>
                            {playlist.content.length}곡
                        </PlayListNumber>
                        <PlayListTime>
                            · 약 {playlist.content.length * 3.5}분
                        </PlayListTime>
                    </PlayListTopLeft>
                </PlayListTop>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                    data={playlistMusics}
                    renderItem={({ item, i }) => (
                        <FlatListWrap key={i}>
                            <FlatListLeft>
                                <FlatListImg>
                                    <Image
                                        style={{
                                            width: "90%",
                                            height: "90%"
                                        }}
                                        source={{ uri: item.thumbnail }}
                                    />
                                </FlatListImg>

                                <FlatListTextBtn
                                    onPress={() => {
                                        navigation.navigate(PLAY_MUSIC_NAME)
                                        store.dispatch(setMusic(item.uuid))
                                    }}
                                >
                                    <FlatListTextWrap>
                                        <PlayListMusicTitle>
                                            {item.title}
                                        </PlayListMusicTitle>
                                        <PlayListMusicSinger>
                                            {item.artist}
                                        </PlayListMusicSinger>
                                    </FlatListTextWrap>
                                </FlatListTextBtn>
                            </FlatListLeft>

                            <FlatListIconWrap>
                                <FlatListIconBtn
                                    onPress={() => {
                                        navigation.navigate(PLAY_MUSIC_NAME)
                                        store.dispatch(setMusic(item.uuid))
                                    }}
                                >
                                    <FlatListIconImg
                                        source={require("../assets/play.png")}
                                    />
                                </FlatListIconBtn>

                                <FlatListIconBtn
                                    onPress={() => {
                                        onUnsupportedAction()
                                    }}
                                >
                                    <FlatListIconImg
                                        source={require("../assets/more2.png")}
                                    />
                                </FlatListIconBtn>
                            </FlatListIconWrap>
                        </FlatListWrap>
                    )}
                />
            </PlaylistWrap>
        </Container>
    ) : (
        <Text>Loading...</Text>
    )
}
