import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { USER_PROFILE_NAME } from "../navigation/NavContainer"

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
    width: 30%;

    text-align: center;
    font-size: 17px;
    font-weight: 500;
    color: #5aa469;
`

const CustomerServiceBtnWrap = styled.View`
    width: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CustomerServiceBtn = styled.TouchableOpacity``

const CustomerServiceText = styled.Text``

const DeleteBtn = styled.TouchableOpacity``

export default function OutRegisterPW() {
    const navigation = useNavigation()

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
                    <Feather name="x" size={24} color="black" />
                </DeleteBtn>
            </TopWrap>
        </SafeAreaView>
    )
}
