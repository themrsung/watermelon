import React, { useState } from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { HOME_NAME, USER_PROFILE_NAME } from "../navigation/NavContainer"
import { store } from "../redux/stores"
import { deleteUser, validatePassword } from "../api/authApi"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;

    display: flex;
    flex-direction: column;
    flex: 1;
`

const TopWrap = styled.View`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom-width: 1px;
    border-bottom-color: #5aa469;
    border-bottom-style: solid;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AccountTitle = styled.Text`
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    color: #236d32;
`

const CustomerServiceBtnWrap = styled.View`
    width: 24%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CustomerServiceBtn = styled.TouchableOpacity``

const CustomerServiceText = styled.Text`
    color: #5aa469;
    font-size: 12px;
`

const DeleteBtn = styled.TouchableOpacity``

const Contents = styled.View`
    width: 100%;
    padding: 30px;
    margin-top: 10px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
`

const PasswordCheckText = styled.Text`
    margin-bottom: 5px;

    font-size: 15px;
    font-weight: 600;
    color: #236d32;
`

const PasswordCheckText2 = styled.Text`
    font-size: 11px;
    color: #4f955d;
`

const PasswordCheckWrap = styled.View`
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    margin-top: 24px;
    background-color: rgba(214, 232, 195, 0.6);
    border: 1px solid #276e38;
    border-radius: 14px;
`

const EmailText = styled.Text`
    color: #276e38;
    font-weight: 600;
`

const EmailDetailText = styled.Text`
    margin-top: 6px;

    color: #4f955d;
    font-size: 13px;
`

const PasswordText = styled.Text`
    margin-top: 40px;

    color: #276e38;
    font-weight: 600;
`

const PasswordCheckInput = styled.TextInput`
    width: 100%;
    padding-bottom: 10px;
    margin: 6px 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(90, 164, 105, 0.6);

    &::placeholder {
        font-size: 12px;
        color: #368245;
    }
`

const SuccessBtnWrap = styled.View`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const SuccessBtn = styled.TouchableOpacity`
    padding: 14px 60px;
    margin-top: 40px;
    border: 1px solid #368245;
    border-radius: 8px;
`

const SuccessText = styled.Text`
    color: #144014;
    font-weight: 700;
`

const ForgetPasswordBtn = styled.TouchableOpacity`
    width: 100%;
    margin-top: 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ForgetPasswordText = styled.Text`
    font-size: 12px;
    color: #62936b;
    text-decoration: underline;
`

export default function OutRegisterPW() {
    const navigation = useNavigation()

    const [password, setPassword] = useState("")

    const onDeleteAccount = async () => {
        if (!store.getState().currentSession.loggedIn) {
            return
        }

        const currentSessionId = store.getState().currentSession.id

        if (!validatePassword(currentSessionId, password)) {
            return
        }

        await deleteUser(currentSessionId)
        navigation.navigate(HOME_NAME)
    }

    return (
        <SafeAreaView>
            <TopWrap>
                <AccountTitle>계정</AccountTitle>

                <CustomerServiceBtnWrap>
                    <CustomerServiceBtn>
                        <CustomerServiceText>도움말</CustomerServiceText>
                    </CustomerServiceBtn>

                    <CustomerServiceBtn>
                        <CustomerServiceText>문의하기</CustomerServiceText>
                    </CustomerServiceBtn>
                </CustomerServiceBtnWrap>

                <DeleteBtn
                    onPress={() => {
                        navigation.navigate(USER_PROFILE_NAME)
                    }}
                >
                    <Feather name="x" size={24} color="#236d32" />
                </DeleteBtn>
            </TopWrap>

            <Contents>
                <PasswordCheckText>비밀번호 확인</PasswordCheckText>
                <PasswordCheckText2>
                    회원님의 소중한 정보 보호를 위해, 계정의 현재
                </PasswordCheckText2>
                <PasswordCheckText2>
                    비밀번호를 확인해 주세요.
                </PasswordCheckText2>

                <PasswordCheckWrap>
                    <EmailText>이메일</EmailText>
                    <EmailDetailText>dnjfht@naver.com</EmailDetailText>

                    <PasswordText>비밀번호</PasswordText>
                    <PasswordCheckInput
                        secureTextEntry={true}
                        placeholder="비밀번호를 입력해주세요."
                        placeholderTextColor={"#7da450"}
                        value={password}
                        onChangeText={setPassword}
                    />
                </PasswordCheckWrap>

                <SuccessBtnWrap>
                    <SuccessBtn>
                        <SuccessText onPress={onDeleteAccount}>
                            계정 삭제하기
                        </SuccessText>
                    </SuccessBtn>
                </SuccessBtnWrap>

                <ForgetPasswordBtn>
                    <ForgetPasswordText>
                        비밀번호가 기억나지 않으세요?
                    </ForgetPasswordText>
                </ForgetPasswordBtn>
            </Contents>
        </SafeAreaView>
    )
}
