import React, { useEffect, useState } from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { CREATE_PLAYLIST_NAME } from "../navigation/NavContainer"
import { getPlaylist } from "../api/playlistsApi"
import { getMusic, getMusicThumbnailLinkFromYouTube } from "../api/musicApi"

const Container = styled.View`
    width: 100%;
    padding: 6px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const AlbumImg = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 14px;
`

const Wrap = styled.View`
    width: 60%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const PlayListGroupTitle = styled.Text`
    margin-right: 10px;

    color: white;
`

const PlayListGroupNumber = styled.Text`
    padding: 4px 10px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;

    color: white;
`

const IconWrap = styled.View`
    width: 14%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const PlayBtn = styled.TouchableOpacity``

const EditBtn = styled.TouchableOpacity``

export default function CreatePlayListGroup({ playlistUuid }) {
    const navigation = useNavigation()

    const [playlist, setPlaylist] = useState({})
    const [playlistThumbnailUrl, setPlaylistThumbnailUrl] = useState("")

    const fetchPlaylist = async () => {
        const newP = await getPlaylist(playlistUuid)
        setPlaylist(newP)
    }

    const fetchThumbnailUrlOfFirstMusicInPlaylist = async () => {
        if (playlist.content.length < 1) {
            return
        }

        const thumbnailOfFirstMusic = await getMusicThumbnailLinkFromYouTube(
            playlist.content[0]
        )
        setPlaylistThumbnailUrl(thumbnailOfFirstMusic)
    }

    useEffect(() => {
        fetchPlaylist()
    }, [])

    useEffect(() => {
        fetchThumbnailUrlOfFirstMusicInPlaylist()
    }, [playlist])

    return (
        <Container>
            <Wrap>
                {playlistThumbnailUrl !== "" && (
                    <AlbumImg source={{ uri: playlistThumbnailUrl }} />
                )}
                <PlayListGroupTitle>{playlist.title}</PlayListGroupTitle>
                <PlayListGroupNumber>
                    {playlist.content ? playlist.content.length : 0}
                </PlayListGroupNumber>
            </Wrap>

            <IconWrap>
                <PlayBtn>
                    <Ionicons name="play" size={18} color="white" />
                </PlayBtn>

                <EditBtn
                    onPress={() => {
                        navigation.navigate(CREATE_PLAYLIST_NAME, {
                            isEditing: true,
                            originalPlaylistUuid: playlist.uuid
                        })
                    }}
                >
                    <FontAwesome name="edit" size={18} color="white" />
                </EditBtn>
            </IconWrap>
        </Container>
    )
}
