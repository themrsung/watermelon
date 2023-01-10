import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { Ionicons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { CREATE_PLAYLIST_NAME } from "../navigation/NavContainer"

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

export default function CreatePlayListGroup() {
    const navigation = useNavigation()

    return (
        <Container>
            <Wrap>
                <AlbumImg source={require("../assets/image2.png")} />
                <PlayListGroupTitle>요즘 많이 듣는 곡3</PlayListGroupTitle>
                <PlayListGroupNumber>232</PlayListGroupNumber>
            </Wrap>

            <IconWrap>
                <PlayBtn>
                    <Ionicons name="play" size={18} color="white" />
                </PlayBtn>

                <EditBtn
                    onPress={() => {
                        navigation.navigate(CREATE_PLAYLIST_NAME)
                    }}
                >
                    <FontAwesome name="edit" size={18} color="white" />
                </EditBtn>
            </IconWrap>
        </Container>
    )
}
