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
    justify-content: space-between;

    position: relative;
`

const MusicState = styled.View`
    width: 380px;
    height: 3px;
    background-color: #ffb8b8;

    position: absolute;
    top: 0;
    left: 0;
`

const TopWrap = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const MusicPlaylistBtn = styled.TouchableOpacity``

const MusicPlaylistIconImg = styled.Image``

const MusicWrap = styled.View`
    margin-left: 20px;

    display: flex;
    flex-direction: column;
`

const MusicTitle = styled.Text`
    color: #e5f8cf;
    font-size: 18px;
`

const MusicSinger = styled.Text`
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
    return (
        <Container>
            <MusicState />
            <TopWrap>
                <MusicPlaylistBtn>
                    <MusicPlaylistIconImg
                        source={require("../assets/playList.png")}
                    />
                </MusicPlaylistBtn>

                <MusicWrap>
                    <MusicTitle>Candy</MusicTitle>
                    <MusicSinger>백현 (BAEKHYUN)</MusicSinger>
                </MusicWrap>
            </TopWrap>

            <MusicControlWrap>
                <MusicControlBtn>
                    <MusicControlIconImg
                        source={require("../assets/play5.png")}
                        style={{ width: 20, height: 20 }}
                    />
                </MusicControlBtn>

                <MusicControlBtn>
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
