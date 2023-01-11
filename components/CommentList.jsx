import React, { useState, useEffect } from "react"
import styled from "@emotion/native"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { getComments } from "../api/commentsApi"
import { useSelector } from "react-redux"

const Comments = () => {
    const [comments, setComments] = useState([])
    const currentPlaylist = useSelector(
        (state) => state.currentPlaylist.playlist
    )

    const fetchComments = async () => {
        const data = await getComments(currentPlaylist)
        setComments(data)
    }

    useEffect(() => {
        fetchComments()
    }, [currentPlaylist])

    const data = [
        {
            image: <LogoImg source={require("../assets/LightBG.png")} />,
            userName: "한",
            date: "23.01.10",
            moreIcon: (
                <MaterialIcons name="more-vert" size={20} color="#5aa469" />
            ),
            content: "띵곡들만 모여있네요, 너무 좋아요!",
            bottomText: "답글 1",
            editIcon: (
                <SimpleLineIcons name="pencil" size={15} color="#5aa469cc" />
            ),
            deleteIcon: <AntDesign name="delete" size={15} color="#5aa469cc" />
        },
        {
            image: <LogoImg source={require("../assets/LightBG.png")} />,
            userName: "쨔오웨이",
            date: "23.01.10",
            moreIcon: (
                <MaterialIcons name="more-vert" size={20} color="#5aa469" />
            ),
            content: "노래 내스탈임",
            bottomText: "답글 ",
            editIcon: (
                <SimpleLineIcons name="pencil" size={15} color="#5aa469cc" />
            ),
            deleteIcon: <AntDesign name="delete" size={15} color="#5aa469cc" />
        },
        {
            image: <LogoImg source={require("../assets/LightBG.png")} />,
            userName: "카리나짱",
            date: "23.01.10",
            moreIcon: (
                <MaterialIcons name="more-vert" size={20} color="#5aa469" />
            ),
            content: "에스파 노래 리스트도 추가해주세요",
            bottomText: "답글 2",
            editIcon: (
                <SimpleLineIcons name="pencil" size={15} color="#5aa469cc" />
            ),
            deleteIcon: <AntDesign name="delete" size={15} color="#5aa469cc" />
        },
        {
            image: <LogoImg source={require("../assets/LightBG.png")} />,
            userName: "하드코딩중",
            date: "23.01.10",
            moreIcon: (
                <MaterialIcons name="more-vert" size={20} color="#5aa469" />
            ),
            content: "코딩 할 때 듣기 좋음",
            bottomText: "답글 ",
            editIcon: (
                <SimpleLineIcons name="pencil" size={15} color="#5aa469cc" />
            ),
            deleteIcon: <AntDesign name="delete" size={15} color="#5aa469cc" />
        },
        {
            image: <LogoImg source={require("../assets/LightBG.png")} />,
            userName: "닉네임짓기도어렵다",
            date: "23.01.10",
            moreIcon: (
                <MaterialIcons name="more-vert" size={20} color="#5aa469" />
            ),
            content: "노래 넘나 좋습니다",
            bottomText: "답글 1",
            editIcon: (
                <SimpleLineIcons name="pencil" size={15} color="#5aa469cc" />
            ),
            deleteIcon: <AntDesign name="delete" size={15} color="#5aa469cc" />
        }
    ]

    return (
        <CommentListScrollView>
            <CommentListCategoryWrap>
                <CategoryBtn style={{ backgroundColor: "#5aa469" }}>
                    <CategoryText style={{ color: "#E5F8CF" }}>
                        전체
                    </CategoryText>
                </CategoryBtn>
                <CategoryBtn>
                    <CategoryText>내 댓글</CategoryText>
                </CategoryBtn>
            </CommentListCategoryWrap>

            <CommentListHeader>
                <CommentListHeaderText>전체 5</CommentListHeaderText>
                <CommentListHeaderBtn>
                    <CommentListHeaderText>⇅ 최신순</CommentListHeaderText>
                </CommentListHeaderBtn>
            </CommentListHeader>

            <CommentListFlatList
                showsVerticalScrollIndicator={false}
                data={comments}
                renderItem={({ item, i }) => (
                    <CommentListWrap key={item.uuid}>
                        <CommentListBoxHeader>
                            <UserNameBtn>
                                <LogoImg
                                    source={require("../assets/LightBG.png")}
                                />
                                <UserNameText>{item.createdBy}</UserNameText>
                            </UserNameBtn>
                            <DateText>{item.createdAt}</DateText>
                            <MoreIcon>
                                <MaterialIcons
                                    name="more-vert"
                                    size={20}
                                    color="#5aa469"
                                />
                            </MoreIcon>
                        </CommentListBoxHeader>

                        <CommentText>{item.content}</CommentText>

                        <CommentListBoxBottom>
                            <ReplyCommentBtn>
                                <ReplyCommentText>답글</ReplyCommentText>
                            </ReplyCommentBtn>
                            <IconView>
                                <EditIconBtn>
                                    <SimpleLineIcons
                                        name="pencil"
                                        size={15}
                                        color="#5aa469cc"
                                    />
                                </EditIconBtn>
                                <DeleteIconBtn>
                                    <AntDesign
                                        name="delete"
                                        size={15}
                                        color="#5aa469cc"
                                    />
                                </DeleteIconBtn>
                            </IconView>
                        </CommentListBoxBottom>
                    </CommentListWrap>
                )}
            />
        </CommentListScrollView>
    )
}

export default Comments

const CommentListScrollView = styled.ScrollView`
    padding: 10px;
    box-sizing: border-box;
`
const CommentListCategoryWrap = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`

const CategoryBtn = styled.TouchableOpacity`
    padding: 4px 20px 4px 20px;
    margin-right: 6px;
    border: 1px solid #5aa469;
    border-radius: 20px;
`

const CategoryText = styled.Text`
    color: #5aa469;
    font-size: 16px;
`
const CommentListHeader = styled.View`
    margin-top: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const CommentListHeaderText = styled.Text`
    color: #5aa469;
    font-size: 15px;
    font-weight: 700;
`
const CommentListHeaderBtn = styled.TouchableOpacity`
    flex-direction: row;
`

const CommentListFlatList = styled.FlatList`
    margin-top: 10px;
`

const CommentListWrap = styled.View`
    margin-top: 10px;
    width: 100%;
    height: 150px;
    box-sizing: border-box;

    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(90, 164, 105, 0.219);

    display: flex;
`

const CommentListBoxHeader = styled.View`
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const UserNameBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`
const LogoImg = styled.Image`
    width: 30px;
    height: 30px;
`
const UserNameText = styled.Text`
    width: 70%;
    margin-left: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #5aa469;
`
const DateText = styled.Text`
    color: #5aa469;
`

const MoreIcon = styled.TouchableOpacity``

const CommentText = styled.Text`
    height: 80px;
    padding: 10px;
    color: #7da450;
`
const CommentListBoxBottom = styled.View`
    box-sizing: border-box;

    flex-direction: row;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`
const ReplyCommentBtn = styled.TouchableOpacity``
const ReplyCommentText = styled.Text`
    font-size: 13px;
    font-weight: 600;
    color: #5aa469cc;
`
const IconView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const EditIconBtn = styled.TouchableOpacity`
    margin-right: 15px;
`
const DeleteIconBtn = styled.TouchableOpacity`
    margin-right: 5px;
`
