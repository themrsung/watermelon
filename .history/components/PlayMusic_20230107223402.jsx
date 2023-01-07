import { TouchableOpacity, View, Text, ImageBackground } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;

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
const MP3Img = styled.Image`
    border-radius: 100px;
`

const MusicTitleView = styled.View`
    margin-bottom: auto;

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

                    <MP3Img source={require("../assets/mp3_image1.png")} />
                    <View>
                        <View>
                            <View>
                                <Text>0:58 3:58</Text>
                            </View>
                        </View>

                        <HorizontalView>
                            <TouchableOpacity>
                                <Text>repeat</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text>Like</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text>셔플</Text>
                            </TouchableOpacity>
                        </HorizontalView>

                        <View>
                            <Text>가로수 그늘 아래 서면</Text>
                        </View>
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
