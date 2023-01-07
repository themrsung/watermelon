import { TouchableOpacity, View, Text, ImageBackground } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BgDark = styled.View`
    width: 100%;
    height: 100%;
    padding: 60px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
`

const MP3Wrap = styled.View`
    padding: 4px 14px;
    box-sizing: border-box;
    margin-right: 10px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.6);
    border-style: solid;
    border-radius: 14px;
`
const MP3Text = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
`

const MP3Title = styled.Text`
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
`

const HorizontalView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const MP3Singer = styled.Text`
    color: #32d536;
    text-align: center;
    margin-top: 12px;
`

const Wrap = styled.View`
    position: relative;
`

const MP3Img = styled.Image`
    width: 100%;
    height: 270px;
    margin-top: 80px;
`

const TimeWrap = styled.View`
    position: absolute;
    top: 24%;
    left: 38%;

    display: flex;
    flex-direction: row;
`

const Time = styled.Text`
    color: #33d53a;
`
const Time2 = styled.Text`
    color: white;
`

const BtnWrap = styled.View`
    width: 100%;
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const MusicControlIconBtn1 = styled.TouchableOpacity`
    margin-right: 40px;
`

const HeartWrap = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MusicControlIconBtn2 = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HeartNumber = styled.Text`
    color: white;
    font-size: 12px;
`

const MusicControlIconBtn3 = styled.TouchableOpacity`
    margin-left: 40px;
`

const MusicControlIconImg = styled.Image``

const MusicTitleView = styled.View`
    z-index: 99999;
`
const MusicControlView = styled.View`
    flex-direction: row;
    margin-top: auto;
`

export default function PlayMusic() {
    return (
        <Container>
            <ImageBackground
                source={require("../assets/bg1.png")}
                style={{ width: "100%", height: "100%" }}
            >
                <BgDark>
                    <MusicTitleView>
                        <HorizontalView>
                            <MP3Wrap>
                                <MP3Text>MP3</MP3Text>
                            </MP3Wrap>

                            <MP3Title>PLAY ME</MP3Title>
                        </HorizontalView>
                        <MP3Singer>WOOGIE(우기)</MP3Singer>
                    </MusicTitleView>
                    <Wrap>
                        <MP3Img source={require("../assets/mp3_image1.png")} />

                        <TimeWrap>
                            <Time>0:58</Time>
                            <Time2>· 3:58</Time2>
                        </TimeWrap>

                        <BtnWrap>
                            <MusicControlIconBtn1>
                                <MusicControlIconImg
                                    source={require("../assets/repeat.png")}
                                />
                            </MusicControlIconBtn1>

                            <HeartWrap>
                                <MusicControlIconBtn2>
                                    <MusicControlIconImg
                                        source={require("../assets/heart.png")}
                                    />
                                </MusicControlIconBtn2>

                                <HeartNumber>1,023</HeartNumber>
                            </HeartWrap>

                            <MusicControlIconBtn3>
                                <MusicControlIconImg
                                    source={require("../assets/shuffle.png")}
                                />
                            </MusicControlIconBtn3>
                        </BtnWrap>
                    </Wrap>

                    <View>
                        <Text>가로수 그늘 아래 서면</Text>
                    </View>

                    <MusicControlView>
                        <View>
                            <TouchableOpacity>
                                <Text>플레이 리스트</Text>
                            </TouchableOpacity>
                        </View>
                        <HorizontalView>
                            <TouchableOpacity>
                                <Text>이전곡</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>재생</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>다음곡</Text>
                            </TouchableOpacity>
                        </HorizontalView>
                        <View>
                            <TouchableOpacity>
                                <Text>볼륨</Text>
                            </TouchableOpacity>
                        </View>
                    </MusicControlView>
                </BgDark>
            </ImageBackground>
        </Container>
    )
}
