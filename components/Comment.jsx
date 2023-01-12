import React, { useState } from "react"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import { PLAYLIST_INFO_NAME } from "../navigation/NavContainer"
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import CommentList from "./CommentList"
import MusicControl from "./MusicControl"
import BottomNav from "./BottomNav"
import { store } from "../redux/stores"
import { writeComment } from "../api/commentsApi"
import { setPlaylist } from "../redux/slices/currentPlaylistSlice"

export default function Comment() {
    const navigation = useNavigation()

    const [commentContent, setCommentContent] = useState("")
    const onWriteComment = async () => {
        const isLoggedIn = store.getState().currentSession.isLoggedIn
        if (!isLoggedIn) {
            return
        }

        const comment = {
            title: "댓글",
            content: commentContent,
            createdBy: store.getState().currentSession.id,
            createdAt: Date.now()
        }

        const response = await writeComment(
            store.getState().currentPlaylist.playlist,
            comment
        )

        setCommentContent("")

        const a = store.getState().currentPlaylist.playlist
        store.dispatch(setPlaylist("-1"))
        store.dispatch(setPlaylist(a))
    }

    return (
        <Container>
            <CommentHeader>
                <IconBtn
                    onPress={() => {
                        navigation.navigate(PLAYLIST_INFO_NAME)
                    }}
                >
                    <AntDesign name="left" size={25} color="#5aa469" />
                </IconBtn>
                <CommentTitle>댓글</CommentTitle>
                <IconBtn>
                    <Ionicons name="reload" size={24} color="#5aa469" />
                </IconBtn>
            </CommentHeader>
            <CommentInputView>
                <CommentTextInput
                    placeholder="댓글을 입력해주세요."
                    value={commentContent}
                    onChangeText={setCommentContent}
                    onSubmitEditing={onWriteComment}
                    placeholderTextColor={"#7da450"}
                />
            </CommentInputView>
            <CommentList />
            <MusicControl />
            <BottomNav />
        </Container>
    )
}

const Container = styled.SafeAreaView`
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
`
const CommentHeader = styled.View`
    width: 100%;
    padding: 35px 10px;

    flex-direction: row;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const IconBtn = styled.TouchableOpacity``

const CommentTitle = styled.Text`
    font-size: 23px;
    color: #5aa469;
    font-weight: 700;
`

const CommentInputView = styled.View`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;

    display: flex;
    align-items: center;
    flex-direction: row;
`

const CommentTextInput = styled.TextInput`
    width: 100%;
    padding: 10px 15px;
    border: 2px solid rgba(90, 164, 105, 0.6);
    border-radius: 20px;

    font-size: 14px;

    &::placeholder {
        font-size: 13px;
        color: #368245;
    }
`
const CommentAddBtn = styled.TouchableOpacity`
    width: 10%;
`
