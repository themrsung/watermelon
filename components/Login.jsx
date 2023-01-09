import {} from "react-native"
import { useState } from "react"
import { login, logout } from "../api/authApi"
import styled from "@emotion/native"
import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"

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

const LoginInputWrap = styled.View`
    width: 100%;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LoginInput = styled.TextInput`
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

const LoginBtn = styled.TouchableOpacity`
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

const LoginText = styled.Text`
    color: white;
`
const BottomBtnWrap = styled.View`
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const Border = styled.View`
    width: 1px;
    height: 12px;
    background-color: #abc5b1;

    position: absolute;
    top: 2px;
    right: 0;
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

export default function Login() {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const onLogin = () => {
        const response = login(userId, userPassword)
    }

    logout()

    return (
        <SafeAreaView>
            <HeaderWrap>
                <HeaderIconVtn>
                    <Feather name="x" size={30} color="#5aa469" />
                </HeaderIconVtn>
            </HeaderWrap>

            <BodyWrap>
                <LogoWrap>
                    <LogoImg source={require("../assets/LightBG.png")} />
                </LogoWrap>

                <IDPWInputWrap>
                    <LoginInputWrap>
                        <LoginInput
                            placeholder="ID를 입력해주세요."
                            placeholderTextColor={"#7da450"}
                            value={userId}
                            onChangeText={setUserId}
                        />
                    </LoginInputWrap>

                    <LoginInputWrap>
                        <LoginInput
                            secureTextEntry={true}
                            placeholder="PASSWORD를 입력해주세요."
                            placeholderTextColor={"#7da450"}
                            value={userPassword}
                            onChangeText={setUserPassword}
                        />
                    </LoginInputWrap>
                </IDPWInputWrap>

                <LoginBtn onPress={onLogin}>
                    <LoginText>Login</LoginText>
                </LoginBtn>

                <BottomBtnWrap>
                    <BottomBtn>
                        <BottomBtnText>아이디 찾기</BottomBtnText>
                        <Border />
                    </BottomBtn>

                    <BottomBtn>
                        <BottomBtnText>비밀번호 찾기</BottomBtnText>
                        <Border />
                    </BottomBtn>

                    <BottomBtn>
                        <BottomBtnText>회원가입</BottomBtnText>
                    </BottomBtn>
                </BottomBtnWrap>

                <BuyBtnWrap>
                    <BuyBtn>
                        <MaterialCommunityIcons
                            name="ticket-confirmation-outline"
                            size={18}
                            color="#368245"
                        />
                        <BuyBtnText>이용권 구매</BuyBtnText>
                    </BuyBtn>

                    <BuyBtn2>
                        <FontAwesome name="diamond" size={18} color="#368245" />
                        <BuyBtnText>WMelon라운지</BuyBtnText>
                    </BuyBtn2>
                </BuyBtnWrap>

                <SetBtnWrap>
                    <SetBtn>
                        <SetBtnText>설정</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>이벤트</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>고객센터</SetBtnText>
                        <MaterialIcons
                            name="navigate-next"
                            size={20}
                            color="#368245"
                        />
                    </SetBtn>

                    <SetBtn>
                        <SetBtnText>공지사항</SetBtnText>
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
                        <MusicBtnText>WMelon차트</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <MaterialCommunityIcons
                            name="playlist-music"
                            size={28}
                            color="rgb(37, 88, 47)"
                        />
                        <MusicBtnText>장르음악</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <Feather name="tv" size={28} color="rgb(37, 88, 47)" />
                        <MusicBtnText>방금그곡</MusicBtnText>
                    </MusicBtn>

                    <MusicBtn>
                        <Entypo
                            name="ticket"
                            size={28}
                            color="rgb(37, 88, 47)"
                        />
                        <MusicBtnText>WMelon티켓</MusicBtnText>
                    </MusicBtn>
                </MusicBtnWrap>
            </BodyWrap>
        </SafeAreaView>
    )
}
