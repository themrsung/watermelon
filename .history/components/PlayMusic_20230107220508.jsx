import { TouchableOpacity, View, Text, ImageBackground } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;

    justify-content: center;
`

const BgDark = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6);
`
const PlayMusicView = styled.View`
    align-items: stretch;
    justify-content: center;
`
const HorizontalView = styled.View`
    flex-direction: row;
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
                            <TouchableOpacity>
                                <Text
                                    style={{
                                        width:"100px"
                                        color: "white",
                                        boxSizing: "border-box",
                                        border: "1px solid White"
                                    }}
                                >
                                    MP3
                                </Text>
                            </TouchableOpacity>
                            <Text>Play Me</Text>
                        </HorizontalView>
                        <Text>우기</Text>
                    </MusicTitleView>

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
