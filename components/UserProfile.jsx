import React, { useEffect, useState } from "react"
import styled from "@emotion/native"
import MusicControl from "./MusicControl"
import BottomNav from "./BottomNav"
import CurrentMusicList from "./CurrentMusicList"
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { FlatList, TextInput } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { OUT_NAME } from "../navigation/NavContainer"
import { useSelector } from "react-redux"
import { getUser, updateUser } from "../api/authApi"

const ProfileContainer = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;
    flex: 1;
`

const ProfileHeader = styled.View`
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    border-bottom-width: 1px;
    border-bottom-color: #5aa469;
    border-bottom-style: solid;
    //background-color: yellow;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ProfileHeaderTextWrap = styled.View`
    display: flex;
    flex-direction: column;
`

const ProfileHeaderText = styled.Text`
    font-size: 26px;
    font-weight: 700;
    color: #5aa469;
`
const EmailWrap = styled.View`
    margin-top: 6px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const EmailText = styled.Text`
    color: #286534;
    font-size: 16px;
    font-weight: 400;
`

const EmailEditBtn = styled.TouchableOpacity`
    margin-left: 10px;

    padding: 4px 10px;
    border: 1px solid #6f9e6f;
    border-radius: 10px;
`

const EmailEditText = styled.Text`
    color: #6f9e6f;
    font-size: 12px;
`

const ProfileHeaderIconWrap = styled.View`
    width: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ProfileImgBtn = styled.TouchableOpacity`
    margin-top: 3px;
`
const ProfileImg = styled.Image`
    width: 30px;
    height: 30px;
`

const BellIconBtn = styled.TouchableOpacity`
    margin-top: 5px;
`

const ScrollViewWrap = styled.ScrollView`
    padding: 10px;
    box-sizing: border-box;
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
    margin: 20px 0 0 10px;
`

const ProfilePageCategoryBox = styled.TouchableOpacity`
    /* border: 1px solid green; */
    width: 100%;
    height: 60px;
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
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
`
const ProfilePageCategoryNumber = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const CategoryNumberText = styled.Text`
    font-size: 15px;
    color: #93d082;
`

const OutRegisterWrap = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    display: flex;
`
const OutRegisterLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const OutRegisterBtn = styled.TouchableOpacity`
    margin-left: 10px;
`

const OutRegistorText = styled.Text`
    color: #5aa469;
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
`

const NextBtn = styled.TouchableOpacity``

export default function UserProfile() {
    const navigation = useNavigation()

    const data = [
        {
            icon: <AntDesign name="hearto" size={20} color="#225f2e" />,
            title: "좋아요한",
            number: "202",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: (
                <MaterialIcons name="queue-music" size={20} color="#225f2e" />
            ),
            title: "내 플레이리스트",
            number: "3",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <Feather name="disc" size={20} color="#225f2e" />,
            title: "많이 들은",
            number: "0",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <FontAwesome5 name="pen-nib" size={20} color="#225f2e" />,
            title: "가사 하이라이팅",
            number: "0",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <AntDesign name="staro" size={20} color="#225f2e" />,
            title: "팬 맺은",
            number: "7",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <FontAwesome name="comment-o" size={20} color="#225f2e" />,
            title: "내가 쓴 댓글",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <Ionicons name="md-bar-chart" size={20} color="#225f2e" />,
            title: "뮤직 DNA",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        },
        {
            icon: <AntDesign name="clouddownloado" size={20} color="#225f2e" />,
            title: "다운로드한",
            nexticon: (
                <Entypo name="chevron-small-right" size={20} color="gray" />
            )
        }
    ]

    const currentSession = useSelector((state) => state.currentSession)
    const [currentUser, setCurrentUser] = useState({})

    const fetchCurrentUser = async () => {
        const user = await getUser(currentSession.id)

        if (!user) {
            return
        }

        setCurrentUser(user)
        setNewEmail(user.email)
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [newEmail, setNewEmail] = useState("")

    const onEditEmail = async () => {
        if (isEditingEmail) {
            const newUser = currentUser
            newUser.email = newEmail

            await updateUser(currentSession.id, newUser)
        }

        setIsEditingEmail(!isEditingEmail)
    }

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileHeaderTextWrap>
                    <ProfileHeaderText>나만의 음악서랍</ProfileHeaderText>
                    <EmailWrap>
                        <EmailText>
                            {currentSession.isLoggedIn
                                ? currentUser !== {}
                                    ? currentUser.email
                                    : currentSession.id
                                : "비회원"}
                        </EmailText>
                        {isEditingEmail && (
                            <TextInput
                                value={newEmail}
                                onChangeText={setNewEmail}
                            />
                        )}
                        <EmailEditBtn>
                            <EmailEditText onPress={onEditEmail}>
                                수정
                            </EmailEditText>
                        </EmailEditBtn>
                    </EmailWrap>
                </ProfileHeaderTextWrap>

                <ProfileHeaderIconWrap>
                    <BellIconBtn>
                        <Feather name="bell" size={26} color="#5aa469" />
                    </BellIconBtn>
                    <ProfileImgBtn>
                        <ProfileImg
                            source={require("../assets/profileImg.jpg")}
                        />
                    </ProfileImgBtn>
                </ProfileHeaderIconWrap>
            </ProfileHeader>

            <ScrollViewWrap>
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

                <OutRegisterWrap
                    onPress={() => {
                        navigation.navigate(OUT_NAME)
                    }}
                >
                    <OutRegisterLeft>
                        <OutRegisterBtn>
                            <Feather name="log-out" size={20} color="#225f2e" />
                        </OutRegisterBtn>
                        <OutRegistorText>회원탈퇴</OutRegistorText>
                    </OutRegisterLeft>

                    <NextBtn>
                        <Entypo
                            name="chevron-small-right"
                            size={20}
                            color="gray"
                        />
                    </NextBtn>
                </OutRegisterWrap>
            </ScrollViewWrap>

            <MusicControl />
            <BottomNav />
        </ProfileContainer>
    )
}
