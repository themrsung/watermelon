import React from "react"
import { ImageBackground, Image, TouchableOpacity } from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import {
    CREATE_PLAYLIST_NAME,
    HOME_NAME,
    MY_PLAYLIST_NAME
} from "../navigation/NavContainer"
import { AntDesign } from "@expo/vector-icons"
import CreatePlayListGroup from "./CreatePlayListGroup"

export default function MyPlayList2() {
    const navigation = useNavigation()
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
                        <MyPlayListSongBtn
                            onPress={() => {
                                navigation.navigate(MY_PLAYLIST_NAME)
                            }}
                        >
                            <MyPlayListSong>곡</MyPlayListSong>
                            <MyPlayMusicImg
                                source={require("../assets/music2.png")}
                            />
                        </MyPlayListSongBtn>
                        <TouchableOpacity>
                            <MyPlayList>플레이리스트</MyPlayList>
                        </TouchableOpacity>
                        <MyPlayListTalkBtn>
                            <MyPlayListText>어학</MyPlayListText>
                        </MyPlayListTalkBtn>
                    </MyPlayListImgWrap>

                    <ScrollPlayList>
                        <AddPlayList>
                            <AddPlayListBtn
                                onPress={() => {
                                    navigation.navigate(CREATE_PLAYLIST_NAME)
                                }}
                            >
                                <AntDesign
                                    name="pluscircleo"
                                    size={28}
                                    color="rgba(255, 255, 255, 0.6)"
                                />
                                <AddPlayListText>
                                    플레이리스트 만들기
                                </AddPlayListText>
                            </AddPlayListBtn>
                        </AddPlayList>

                        <PlayListGroupWrap>
                            <CreatePlayListGroup />
                            <CreatePlayListGroup />
                            <CreatePlayListGroup />
                            <CreatePlayListGroup />
                        </PlayListGroupWrap>
                    </ScrollPlayList>
                </BgDark>
            </ImageBackground>
        </Container>
    )
}

const Container = styled.View`
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
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
`

const MyPlayList = styled.Text`
    color: #3ad13a;
    font-size: 15px;
    font-weight: 700;
`

const MyPlayListText = styled.Text`
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
`
const ScrollPlayList = styled.ScrollView`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`
const AddPlayList = styled.View`
    width: 100%;
    padding: 10px;
`
const AddPlayListBtn = styled.TouchableOpacity`
    width: 54%;
    padding: 10px;
    //background-color: pink;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const AddPlayListText = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
`
const PlayListGroupWrap = styled.View`
    width: 100%;
    margin-top: 10px;
`
