import { TouchableOpacity, View, Text } from "react-native"
import styled from "@emotion/native"

const PlayMusicView = styled.View`
    align-items: stretch;
    justify-content: center;
`
const HorizontalView = styled.View`
    flex-direction: row;
`
const MusicTitleView = styled.View`
    margin-bottom: auto;
`
const MusicControlView = styled.View`
    flex-direction: row;
    margin-top: auto;
`
const Container = styled.View`
    height: 500;
    justify-content: center;
    background-color: pink;
`

export default function PlayMusic() {
    return (
        <Container>
            <MusicTitleView>
                <HorizontalView>
                    <TouchableOpacity>
                        <Text>MP3</Text>
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
        </Container>
    )
}
