import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import styled from "@emotion/native"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

const ProfileContainer = styled.View`
    padding: 20px 0;
`

const ProfileTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #80ae4b;
`

const NicknameIconView = styled.View`
    flex-direction: row;
    justify-content: space-around;
`

const ProfilePlayList = styled.ScrollView`
    margin-top: 50px;
    padding-left: 15px;
`

const ProfilePlayListTitle = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: #5aa469;
`
const PlaylistImg = styled.Image`
    width: 50px;
    height: 50px;
`

const PlayListView = styled.View`
    flex-direction: row;
    width: 350px;
    margin-top: 10px;
    border: 1px solid #5aa469;
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(214, 232, 195, 0.3);
`

const PlayListContent = styled.View`
    flex-direction: row;
    align-items: center;
`
const PlayListContentTitle = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
    color: #5aa469;
`
const PlayListContentName = styled.Text`
    font-size: 10px;
    margin-left: 7px;
    color: #80ae4b;
    font-weight: 600;
`

const DeleteButton = styled.TouchableOpacity`
    margin-left: 190px;
`

export default function UserProfile() {
    return (
        <ProfileContainer>
            <NicknameIconView>
                <ProfileTitle>NickName</ProfileTitle>
                <TouchableOpacity>
                    <AntDesign name="edit" size={20} color="black" />
                </TouchableOpacity>
            </NicknameIconView>
            <ProfilePlayList>
                <ProfilePlayListTitle>
                    <MaterialIcons
                        name="queue-music"
                        size={24}
                        color="#5aa469"
                    />
                    내 플레이리스트
                </ProfilePlayListTitle>
                <PlayListView>
                    <PlaylistImg source={require("../assets/image1.png")} />
                    <PlayListContent>
                        <View>
                            <PlayListContentTitle>
                                운이 좋았지
                            </PlayListContentTitle>
                            <PlayListContentName>- 권진아</PlayListContentName>
                        </View>
                        <DeleteButton>
                            <AntDesign name="delete" size={18} color="black" />
                        </DeleteButton>
                    </PlayListContent>
                </PlayListView>
            </ProfilePlayList>
        </ProfileContainer>
    )
}
