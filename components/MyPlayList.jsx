import React from "react"
import { Image, Touchable, TouchableOpacity, View, Text } from "react-native"
import styled from "@emotion/native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function PlaylistList() {
    const data = [
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "LOVE",
            singer: "릴러말즈(Leellarmarz)"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "예쁨 가득한 Eve",
            singer: "한요한, 김승민"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Mise-en-Scene",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Trip (Feat. Hannah)",
            singer: "릴러말즈(Leellamarz)"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Island",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "새삥(Prod.Zico)",
            singer: "지코(Zico)"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Missing You (Feat. 김윤아)",
            singer: "G-DRAGON"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Part Of Her",
            singer: "한요한,김승민"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "시간이 들겠지 (Feat Colde)",
            singer: "로꼬"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <Container>
            <MyPlayListWrap>
                <MyPlayStartText>재생목록</MyPlayStartText>
                <MyPlaySettingBtn>
                    <Image source={require("../assets/settings.png")} />
                </MyPlaySettingBtn>
                <TouchableOpacity>
                    <Image source={require("../assets/bottom.png")} />
                </TouchableOpacity>
            </MyPlayListWrap>

            <MyPlayListImgWrap>
                <MyPlayListSongBtn>
                    <MyPlayListSong>곡</MyPlayListSong>
                </MyPlayListSongBtn>
                <TouchableOpacity>
                    <MyPlayList>플레이리스트</MyPlayList>
                </TouchableOpacity>
                <MyPlayListTalkBtn>
                    <MyPlayList>어학</MyPlayList>
                </MyPlayListTalkBtn>
            </MyPlayListImgWrap>
            <MyPlayListSongIcon>
                <MyPlayMusicImg source={require("../assets/music.png")} />
            </MyPlayListSongIcon>

            <PlaylistWrap>
                <FlatList
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
                                        source={require("../assets/more2.png")}
                                    />
                                </MyPlayListIconBtn>
                            </MyPlayListIconWrap>
                        </FlatListMyPlay>
                    )}
                />
                <ContainerFooter>
                    <MyPlayIconBtn>
                        <IconPictureImage
                            source={require("../assets/image6.png")}
                        />
                    </MyPlayIconBtn>

                    <MyPlayIconBtn>
                        <IconImage source={require("../assets/play7.png")} />
                    </MyPlayIconBtn>

                    <MyPlayIconBtn>
                        <IconPictureImage
                            source={require("../assets/play6.png")}
                        />
                    </MyPlayIconBtn>

                    <MyPlayIconBtn>
                        <IconImage source={require("../assets/play8.png")} />
                    </MyPlayIconBtn>

                    <MyPlayIconBtn>
                        <IconImage source={require("../assets/volume2.png")} />
                    </MyPlayIconBtn>
                </ContainerFooter>
            </PlaylistWrap>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #867544;
`
const MyPlayListWrap = styled.View`
    width: 100%;
    //background-color: pink;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

const MyPlayMusicImg = styled.Image`
    width: 12px;
    height: 12px;
`

const MyPlayListSongBtn = styled.TouchableOpacity`
    position: relative;
    margin-left: 20px;
`

const MyPlayListSongIcon = styled.View`
    position: absolute;
    top: 6.8%;
    left: 16%;
`

const MyPlayListTalkBtn = styled.TouchableOpacity`
    margin-right: 20px;
`

const MyPlayListSong = styled.Text`
    color: #3ad13a;
    font-size: 15px;
    font-weight: 700;
`

const MyPlayList = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: 700;
`

const PlaylistWrap = styled.View`
    width: 100%;
    margin: 20px 0;
    //background-color: yellow;
`

const FlatList = styled.FlatList`
    margin-top: 10px;
`

const FlatListMyPlay = styled.View`
    width: 100%;
    height: 100px;
    padding: 4px 10px;

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

const FlatListMyPlayWrap = styled.View``

const MyPlayListMusicTitle = styled.Text`
    color: white;
    font-size: 14px;
`

const MyPlayListMusicSinger = styled.Text`
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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70%;
`
const MyPlayIconBtn = styled.TouchableOpacity``

const IconPictureImage = styled.Image`
    margin-top: 12px;
    width: 38px;
    height: 35px;
`

const IconImage = styled.Image`
    margin-top: 17px;
    width: 25px;
    height: 25px;
`
