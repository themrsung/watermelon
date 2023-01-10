import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { HOME_NAME } from "../navigation/NavContainer"

import MusicControl from "./MusicControl"
import BottomNav from "./BottomNav"

const SafeAreaViews = styled.SafeAreaView`
    width: 100%;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const TopWrap = styled.View`
    width: 100%;
    padding: 40px 20px 10px 20px;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const PrevBtn = styled.TouchableOpacity``

const CreatePlayText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #41884f;
`
const SuccessBtn = styled.TouchableOpacity`
    padding: 8px 26px;
    background-color: rgba(106, 164, 119, 0.8);
    border-radius: 20px;
`

const SuccessBtnText = styled.Text`
    color: white;
    font-size: 12px;
`

const YoutubeUrlInputWrap = styled.ScrollView`
    width: 100%;
    padding: 0 20px;

    margin-top: 30px;
`

const YoutubeUrlText = styled.Text`
    color: #5aa469;
    font-size: 20px;
    font-weight: bold;
`

const YoutubeUrlInput = styled.TextInput`
    width: 100%;
    padding-bottom: 10px;
    margin-top: 4px;
    margin-bottom: 16px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(90, 164, 105, 0.6);

    &::placeholder {
        font-size: 13px;
        color: #368245;
    }
`

export default function CreateMusic() {
    const navigation = useNavigation()

    return (
        <SafeAreaViews>
            <TopWrap>
                <PrevBtn
                    onPress={() => {
                        navigation.navigate(HOME_NAME)
                    }}
                >
                    <AntDesign name="left" size={20} color="#5aa469" />
                </PrevBtn>

                <CreatePlayText>음악 등록/수정</CreatePlayText>

                <SuccessBtn>
                    <SuccessBtnText>완료</SuccessBtnText>
                </SuccessBtn>
            </TopWrap>

            <YoutubeUrlInputWrap>
                <YoutubeUrlText>유튜브 링크</YoutubeUrlText>
                <YoutubeUrlInput
                    placeholder="유튜브 링크를 적어주세요"
                    placeholderTextColor={"#7da450"}
                />
            </YoutubeUrlInputWrap>

            <MusicControl />
            <BottomNav />

        </SafeAreaViews>
    )
}
