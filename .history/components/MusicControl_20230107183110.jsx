import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 120px;
    background-color: #5aa469;
    border-bottom-width: 1px;
    border-bottom-color: #e5f8cf;
    border-bottom-style: solid;
`

const MusicPlaylistBtn = styled.TouchableOpacity``

const MusicPlaylistIconImg = styled.Image``

export default function MusicControl() {
    return (
        <Container>
            <MusicPlaylistBtn>
                <MusicPlaylistIconImg
                    source={require("../assets/playList.png")}
                />
            </MusicPlaylistBtn>
        </Container>
    )
}
