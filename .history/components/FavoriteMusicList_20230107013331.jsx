import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View``

const SlideView = styled.View`
    width: 200px;
`

const PlaylistTitle = styled.Text`
    font-size: 15px;
    color: #80ae4b;
`

const PlaylistView = styled.View`
    width: 300px;
    height: 300px;
    padding: 20px;
    background-color: rgba(214, 232, 195, 0.3);
    margin-top: 10px;
    border: 1px solid #276e38;
    border-radius: 14px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`

const PlayButton = styled.TouchableOpacity`
    position: absolute;
    top: 14px;
    right: 14px;
`

const PlayIconImg = styled.Image``

const PlaylistImg = styled.Image`
    width: 70%;
    height: 70%;
`

const PlaylistAlbumTitle = styled.Text`
    margin-top: 20px;

    font-size: 18px;
    color: #5aa469;
    font-weight: 600;
`

const PlaylistAlbumDes = styled.Text`
    margin-top: 4px;

    color: #80ae4b;
`

export default function FavoriteMusicList() {
    return (
        <Container>
            <SlideView>
                <PlaylistTitle>이번주 인기 플레이리스트</PlaylistTitle>
                <PlaylistView>
                    <PlayButton>
                        <PlayIconImg source={require("../assets/play.png")} />
                    </PlayButton>
                    <PlaylistImg source={require("../assets/image1.png")} />
                    <PlaylistAlbumTitle>
                        깊어 가는 하얀 겨울, 따뜻...
                    </PlaylistAlbumTitle>

                    <PlaylistAlbumDes>#겨울 #연말</PlaylistAlbumDes>
                </PlaylistView>
            </SlideView>

            <SlideView>
                <PlaylistTitle>이번주 인기 플레이리스트</PlaylistTitle>
                <PlaylistView>
                    <PlayButton>
                        <PlayIconImg source={require("../assets/play.png")} />
                    </PlayButton>
                    <PlaylistImg source={require("../assets/image1.png")} />
                    <PlaylistAlbumTitle>
                        깊어 가는 하얀 겨울, 따뜻...
                    </PlaylistAlbumTitle>

                    <PlaylistAlbumDes>#겨울 #연말</PlaylistAlbumDes>
                </PlaylistView>
            </SlideView>
        </Container>
    )
}
