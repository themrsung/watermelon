import React from "react"
import { Image } from "react-native"
import styled from "@emotion/native"

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

const FlatListImg = styled.Text`
    width: 90px;
    height: 90px;
    margin-top: -14%;
`

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
    const data = [
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Hype boy",
            singer: "NewJeans"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Mise-en-Scene",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Black Mamba",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Island",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image10.png")} />,
            title: "Beware",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image9.png")} />,
            title: "Forever",
            singer: "asspa"
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
            <TopWrap>
                <TopImgWrap>
                    <TopImg source={require("../assets/image1.png")} />
                </TopImgWrap>

                <PlayListTitle>
                    깊어 가는 하얀 겨울, 따뜻한 플레이리스트
                </PlayListTitle>

                <EditDate>3일 전 업데이트</EditDate>

                <Profile>
                    <ProfileLeft>
                        <ProfileImg source={require("../assets/image4.png")} />

                        <Editor>
                            <ProfileDJ1>DJ</ProfileDJ1>
                            <ProfileDJ2>멜론TOP100</ProfileDJ2>
                        </Editor>

                        <EditorCheckImg
                            source={require("../assets/check2.png")}
                        />
                    </ProfileLeft>

                    <FollowBtn>
                        <PlusIconImg source={require("../assets/plus.png")} />
                        <PlusText>팔로우</PlusText>
                    </FollowBtn>
                </Profile>

                <DesWrap>
                    <PlayListDes>
                        {`추운 겨울, 사랑하는 사람과 함께\n플레이리스트를 들으면서 따뜻하게 보내세요!\n나도 하고 싶다.. 사랑...`}
                    </PlayListDes>
                </DesWrap>

                <IconWrap>
                    <IconLeft>
                        <IconBtnWrap>
                            <IconBtn>
                                <IconImg
                                    source={require("../assets/heart2.png")}
                                />
                            </IconBtn>
                            <IconNumber>3,647</IconNumber>
                        </IconBtnWrap>

                        <IconBtnWrap>
                            <IconBtn>
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
                    <PlayBtnWrap>
                        <PlayBtnIcon
                            source={require("../assets/shuffle3.png")}
                        />
                        <PlayText>셔플재생</PlayText>
                    </PlayBtnWrap>

                    <PlayBtnWrap>
                        <PlayBtnIcon source={require("../assets/play.png")} />
                        <PlayText>전체재생</PlayText>
                    </PlayBtnWrap>
                </PlayWrap>
            </TopWrap>

            <PlaylistWrap>
                <PlayListTop>
                    <AllSelectBtn>
                        <AllSelectBtnImg
                            source={require("../assets/check.png")}
                        />
                        <AllSelectText>전체선택</AllSelectText>
                    </AllSelectBtn>

                    <PlayListTopLeft>
                        <PlayListNumber>132곡</PlayListNumber>
                        <PlayListTime>· 7시간 45분</PlayListTime>
                    </PlayListTopLeft>
                </PlayListTop>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                    data={data}
                    renderItem={({ item, i }) => (
                        <FlatListWrap key={i}>
                            <FlatListLeft>
                                <FlatListImg>{item.image}</FlatListImg>

                                <FlatListTextWrap>
                                    <PlayListMusicTitle>
                                        {item.title}
                                    </PlayListMusicTitle>
                                    <PlayListMusicSinger>
                                        {item.singer}
                                    </PlayListMusicSinger>
                                </FlatListTextWrap>
                            </FlatListLeft>

                            <FlatListIconWrap>
                                <FlatListIconBtn>
                                    <FlatListIconImg
                                        source={require("../assets/play.png")}
                                    />
                                </FlatListIconBtn>

                                <FlatListIconBtn>
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
    )
}
