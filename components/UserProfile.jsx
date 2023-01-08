import React, { useState } from "react"
import styled from "@emotion/native"
import MusicControl from "./MusicControl"
import BottomNav from "./BottomNav"
import CurrentMusicList from "./CurrentMusicList"
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"

const ProfileContainer = styled.ScrollView`
    padding: 30px 0;
`

const ProfileHeader = styled.View`
    flex-direction: row;
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const ProfileHeaderText = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: #5aa469;
`

const ProfileImgBtn = styled.TouchableOpacity`
    margin-top: 3px;
`
const ProfileImg = styled.Image`
    width: 30px;
    height: 30px;
`

const BellIconBtn = styled.TouchableOpacity`
    margin-left: 135px;
    margin-right: 10px;
    margin-top: 5px;
`

const LatelyCategory = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const LatelyMusicTitle = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    line-height: 40px;
    margin-left: 10px;
`
const AllTitleBtn = styled.TouchableOpacity``
const AllTitleText = styled.Text`
    color: #9abc74;
    font-size: 15px;
    margin-right: 10px;
`
const ProfilePageBanner = styled.Image`
    width: 100%;
    height: 100px;
    margin-top: 15px;
    border-radius: 6px;
`
const ProfilePageCategoryList = styled.View`
    margin: 20px 0 30px 10px;
`

const ProfilePageCategoryBox = styled.TouchableOpacity`
    /* border: 1px solid green; */
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    display: flex;
`
const FlatListCategoryLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const ProfilePageCategoryTitle = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
`
const ProfilePageCategoryNumber = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
const CategoryNumberText = styled.Text`
    margin-top: 3px;
    font-size: 15px;
    color: #5aa469;
`

export default function UserProfile() {
    const data = [
        {
            icon: <AntDesign name="hearto" size={24} color="#5aa469" />,
            title: "좋아요한",
            number: "202",
            nexticon: (
                <Entypo name="chevron-small-right" size={24} color="gray" />
            )
        },
        {
            icon: (
                <MaterialIcons name="queue-music" size={24} color="#5aa469" />
            ),
            title: "내 플레이리스트",
            number: "3",
            nexticon: (
                <Entypo name="chevron-small-right" size={24} color="gray" />
            )
        },
        {
            icon: <Feather name="disc" size={24} color="#5aa469" />,
            title: "많이 들은",
            number: "0",
            nexticon: (
                <Entypo name="chevron-small-right" size={24} color="gray" />
            )
        },
        {
            icon: <FontAwesome name="comment-o" size={24} color="#5aa469" />,
            title: "내가 쓴 댓글",
            number: "0",
            nexticon: (
                <Entypo name="chevron-small-right" size={24} color="gray" />
            )
        }
    ]
    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileHeaderText>나만의 음악서랍</ProfileHeaderText>
                <BellIconBtn>
                    <Feather name="bell" size={26} color="#5aa469" />
                </BellIconBtn>
                <ProfileImgBtn>
                    <ProfileImg source={require("../assets/profileImg.jpg")} />
                </ProfileImgBtn>
            </ProfileHeader>
            <LatelyCategory>
                <LatelyMusicTitle>최근 들은</LatelyMusicTitle>
                <AllTitleBtn>
                    <AllTitleText>전체보기</AllTitleText>
                </AllTitleBtn>
            </LatelyCategory>
            <CurrentMusicList />
            <ProfilePageBanner source={require("../assets/banner2.png")} />
            <ProfilePageCategoryList>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item, i }) => (
                        <ProfilePageCategoryBox key={i}>
                            <FlatListCategoryLeft>
                                {item.icon}
                                <ProfilePageCategoryTitle>
                                    {item.title}
                                </ProfilePageCategoryTitle>
                            </FlatListCategoryLeft>

                            <ProfilePageCategoryNumber>
                                <CategoryNumberText>
                                    {item.number}
                                </CategoryNumberText>
                                {item.nexticon}
                            </ProfilePageCategoryNumber>
                        </ProfilePageCategoryBox>
                    )}
                />
            </ProfilePageCategoryList>
            <MusicControl />
            <BottomNav />
        </ProfileContainer>
    )
}
