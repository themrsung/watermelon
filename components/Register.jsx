import {} from "react-native"
import { useState } from "react"
import { login, register } from "../api/authApi"
import {} from "react-native"
import { useNavigation } from "@react-navigation/core"
import { LOGIN_NAME } from "../navigation/NavContainer"
import styled from "@emotion/native"
import { Feather } from "@expo/vector-icons"
import { HOME_NAME } from "../navigation/NavContainer"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import {
    LOGIN_FAILED,
    LOGIN_SUCCEEDED,
    REGISTER_FAILED_GET_USERS_FAILED,
    REGISTER_FAILED_INVALID_USER,
    REGISTER_SUCCEEDED
} from "../api/apiSettings"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    //background-color: #ffb356;

    display: flex;
    flex-direction: column;
    flex: 1;
`

const HeaderWrap = styled.View`
    width: 100%;
    height: 30px;

    position: relative;
`

const HeaderIconVtn = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
`
const BodyWrap = styled.ScrollView``

const LogoWrap = styled.View`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const LogoImg = styled.Image`
    width: 160px;
    height: 160px;
`

const IDPWInputWrap = styled.View`
    margin-top: -20px;
`

const RegistorInputWrap = styled.View`
    width: 100%;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const RegistorInput = styled.TextInput`
    width: 100%;
    padding: 10px 16px;
    box-sizing: border-box;
    border: 2px solid rgba(90, 164, 105, 0.6);
    border-radius: 6px;

    font-size: 14px;

    &::placeholder {
        font-size: 13px;
        color: #368245;
    }
`

const RegistorBtn = styled.TouchableOpacity`
    width: 100%;
    padding: 14px 20px;
    margin-top: 10px;
    background-color: rgba(84, 152, 98, 0.8);

    border-radius: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const RegistorText = styled.Text`
    color: white;
`

const BottomBtnWrap = styled.View`
    margin-top: 20px;

    display: flex;
    flex-direction: row;

    justify-content: center;

    align-items: center;
`

const BottomBtn = styled.TouchableOpacity`
    padding: 0 30px;
`

const BottomBtnText = styled.Text`
    font-size: 12px;
    color: #276434;

    position: relative;
`
const BuyBtnWrap = styled.View`
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    box-sizing: border-box;
    //background-color: rgba(84, 152, 98, 0.8);
    border-radius: 10px;
    border: 1px solid rgba(105, 169, 117, 0.8);

    display: flex;
    flex-direction: row;
`

const BuyBtn = styled.TouchableOpacity`
    width: 50%;
    padding: 4px 10px;
    box-sizing: border-box;
    border-right-width: 1px;
    border-right-color: rgba(84, 152, 98, 0.8);
    border-right-style: solid;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const BuyBtn2 = styled.TouchableOpacity`
    width: 50%;
    padding: 4px 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const BuyBtnText = styled.Text`
    margin-left: 6px;

    color: rgb(84, 152, 98);
    font-size: 12px;
`

const SetBtnWrap = styled.View`
    width: 100%;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const SetBtn = styled.TouchableOpacity`
    width: 49%;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid rgb(84, 152, 98);
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const SetBtnText = styled.Text`
    color: #368245;
    font-size: 12px;
`

const MusicBtnWrap = styled.View`
    width: 100%;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MusicBtn = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MusicBtnText = styled.Text`
    margin-top: 4px;
    font-size: 12px;
    color: rgb(47, 115, 61);
`

export default function Register() {
    const navigation = useNavigation()

    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const onRegister = async () => {
        if (
            userId === "" ||
            userPassword === "" ||
            userName === "" ||
            userEmail === ""
        ) {
            // ?????? ????????? ?????? ????????? ???
            return
        }

        const response = await register(
            userId,
            userPassword,
            userName,
            userEmail
        )

        if (response === REGISTER_FAILED_GET_USERS_FAILED) {
            // ???????????? ????????? ????????? ????????? ???????????? ????????? ?????????
        } else if (response === REGISTER_FAILED_INVALID_USER) {
            // ???????????? ????????? ????????? ????????? ???????????? ????????? ?????????
        }

        const loginResponse = await login(userId, userPassword)
        if (loginResponse === LOGIN_FAILED) {
            // ???????????? ??????, ????????? ?????? => ????????? ????????? ??????
            navigation.navigate(LOGIN_NAME)
        }

        navigation.navigate(HOME_NAME)
    }

    return (
        <SafeAreaView>
            <HeaderWrap>
                <HeaderIconVtn
                    onPress={() => {
                        navigation.navigate(HOME_NAME)
                    }}
                >
                    <Feather name="x" size={30} color="#5aa469" />
                </HeaderIconVtn>
            </HeaderWrap>

            <BodyWrap>
                <LogoWrap>
                    <LogoImg source={require("../assets/LightBG.png")} />
                </LogoWrap>

                <IDPWInputWrap>
                    <RegistorInputWrap>
                        <RegistorInput
                            placeholder="ID??? ??????????????????."
                            placeholderTextColor={"#7da450"}
                            value={userId}
                            onChangeText={setUserId}
                        />
                    </RegistorInputWrap>

                    <RegistorInputWrap>
                        <RegistorInput
                            secureTextEntry={true}
                            placeholder="PASSWORD??? ??????????????????."
                            placeholderTextColor={"#7da450"}
                            value={userPassword}
                            onChangeText={setUserPassword}
                        />
                    </RegistorInputWrap>

                    <RegistorInputWrap>
                        <RegistorInput
                            placeholder="NAME??? ??????????????????."
                            placeholderTextColor={"#7da450"}
                            value={userName}
                            onChangeText={setUserName}
                        />
                    </RegistorInputWrap>

                    <RegistorInputWrap>
                        <RegistorInput
                            placeholder="EMAIL??? ??????????????????."
                            placeholderTextColor={"#7da450"}
                            value={userEmail}
                            onChangeText={setUserEmail}
                        />
                    </RegistorInputWrap>
                </IDPWInputWrap>

                <RegistorBtn onPress={onRegister}>
                    <RegistorText>????????????</RegistorText>
                </RegistorBtn>

                <BottomBtnWrap>
                    <BottomBtn
                        onPress={() => {
                            navigation.navigate(LOGIN_NAME)
                        }}
                    >
                        <BottomBtnText>??????????????? ??????</BottomBtnText>
                    </BottomBtn>
                </BottomBtnWrap>

                <BuyBtnWrap>
                    <BuyBtn>
                        <MaterialCommunityIcons
                            name="ticket-confirmation-outline"
                            size={18}
                            color="#368245"
                        />
                        <BuyBtnText>????????? ??????</BuyBtnText>
                    </BuyBtn>

                    <BuyBtn2>
                        <FontAwesome name="diamond" size={18} color="#368245" />
                        <BuyBtnText>WMelon?????????</BuyBtnText>
                    </BuyBtn2>
                </BuyBtnWrap>

                <SetBtnWrap>
                    <SetBtn>
                        <SetBtnText>??????</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>?????????</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>????????????</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>????????????</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>
                </SetBtnWrap>

                <MusicBtnWrap>
                    <MusicBtn>
                        <MaterialCommunityIcons
                            name="cards-playing"
                            size={28}
                            color="rgb(37, 88, 47)"
                        />
                        <MusicBtnText>WMelon??????</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <MaterialCommunityIcons
                            name="playlist-music"
                            size={28}
                            color="rgb(37, 88, 47)"
                        />
                        <MusicBtnText>????????????</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <Feather name="tv" size={28} color="rgb(37, 88, 47)" />
                        <MusicBtnText>????????????</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <Entypo
                            name="ticket"
                            size={28}
                            color="rgb(37, 88, 47)"
                        />
                        <MusicBtnText>WMelon??????</MusicBtnText>
                    </MusicBtn>
                </MusicBtnWrap>
            </BodyWrap>
        </SafeAreaView>
    )
}
