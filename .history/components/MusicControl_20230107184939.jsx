import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 70px;
    padding: 14px 20px;
    box-sizing: border-box;
    background-color: #5aa469;
    border-bottom-width: 1px;
    border-bottom-color: #e5f8cf;
    border-bottom-style: solid;

    display: flex;
    flex-direction: row;
    align-items: center;
`

const MusicPlaylistBtn = styled.TouchableOpacity``

const MusicPlaylistIconImg = styled.Image``

const MusicWrap = styled.View``

const MusicTitle = styled.Text``

const MusicSinger = styled.Text``

export default function MusicControl() {
    return (
        <Container>
            <MusicPlaylistBtn>
                <MusicPlaylistIconImg
                    source={require("../assets/playList.png")}
                />
            </MusicPlaylistBtn>

            <MusicWrap>
                <MusicTitle>Candy</MusicTitle>
                <MusicSinger>백현 (BAEKHYUN)</MusicSinger>
            </MusicWrap>
        </Container>
    )
}
