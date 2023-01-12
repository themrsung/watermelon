import React, { useEffect, useState } from "react"
import { View } from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import {
    MY_PLAYLIST_NAME,
    PLAYLIST_PAGE_NAME,
    PLAY_MUSIC_NAME
} from "../navigation/NavContainer"
import { store } from "../redux/stores"
import { setPlaylist } from "../redux/slices/currentPlaylistSlice"
import { useSelector } from "react-redux"
import { getMusicMetadataFromYouTube } from "../api/musicApi"
import TextTicker from "react-native-text-ticker"

const Container = styled.View`
    width: 100%;
    padding: 14px 20px;
    box-sizing: border-box;
    background-color: #5aa469;
    border-bottom-width: 1px;
    border-bottom-color: #e5f8cf;
    border-bottom-style: solid;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: relative;
`

const MusicState = styled.View`
    width: 500px;
    height: 3px;
    background-color: #ffb8b8;

    position: absolute;
    top: 0;
    left: 0;
`

const MusicStateInner = styled.View`
    width: 260px;
    height: 3px;
    background-color: #f66363;

    position: absolute;
    top: 0;
    left: 0;
`

const TopWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MusicPlaylistBtn = styled.TouchableOpacity``

const MusicPlaylistIconImg = styled.Image``

const MusicWrapBtn = styled.TouchableOpacity``

const MusicWrap = styled.View`
    margin-left: 20px;

    display: flex;
    flex-direction: column;
`

const MusicSinger = styled.Text`
    width: 200px;

    color: #e5f8cf;
    font-size: 10px;
`

const MusicControlWrap = styled.View`
    width: 34%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const MusicControlBtn = styled.TouchableOpacity``

const MusicControlIconImg = styled.Image``

export default function MusicControl() {
    const navigation = useNavigation()

    const currentMusicUuid = useSelector((state) => state.currentMusic.music)
    const [musicMetadata, setMusicMetadata] = useState({})

    const fetchMusicMetadata = async () => {
        const res = await getMusicMetadataFromYouTube(currentMusicUuid)
        if (!res) {
            return
        }

        setMusicMetadata(res)
    }

    useEffect(() => {
        fetchMusicMetadata()
    }, [currentMusicUuid])

    return (
        <Container>
            <MusicState>
                <MusicStateInner />
            </MusicState>

            <TopWrap>
                <MusicPlaylistBtn
                    onPress={() => {
                        navigation.navigate(PLAYLIST_PAGE_NAME, {
                            playlistUuid: "3"
                        })
                        store.dispatch(setPlaylist("3"))
                    }}
                >
                    <MusicPlaylistIconImg
                        source={require("../assets/playList.png")}
                    />
                </MusicPlaylistBtn>

                <MusicWrapBtn
                    onPress={() => {
                        navigation.navigate(PLAY_MUSIC_NAME)
                    }}
                >
                    <MusicWrap>
                        <View
                            style={{
                                width: 200,
                                paddingRight: 15
                            }}
                        >
                            <TextTicker
                                scrollSpeed={50}
                                loop
                                bounce
                                numberOfLines={1}
                                style={{
                                    color: "#e5f8cf",
                                    fontSize: 17
                                }}
                            >
                                {musicMetadata.title}
                            </TextTicker>
                        </View>
                        <MusicSinger>{musicMetadata.artist}</MusicSinger>
                    </MusicWrap>
                </MusicWrapBtn>
            </TopWrap>

            <MusicControlWrap>
                <MusicControlBtn>
                    <MusicControlIconImg
                        source={require("../assets/play5.png")}
                        style={{ width: 20, height: 20 }}
                    />
                </MusicControlBtn>

                <MusicControlBtn
                    onPress={() => {
                        navigation.navigate(PLAY_MUSIC_NAME)
                    }}
                >
                    <MusicControlIconImg
                        source={require("../assets/play3.png")}
                    />
                </MusicControlBtn>

                <MusicControlBtn>
                    <MusicControlIconImg
                        source={require("../assets/play4.png")}
                        style={{ width: 20, height: 20 }}
                    />
                </MusicControlBtn>
            </MusicControlWrap>
        </Container>
    )
}
