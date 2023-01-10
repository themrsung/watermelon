import React from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign } from "@expo/vector-icons"
import styled from "@emotion/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import {
    OUT_REGISTOR_PW_NAME,
    USER_PROFILE_NAME
} from "../navigation/NavContainer"

export default function Out() {
    const navigation = useNavigation()

    return (
        <SafeAreaViews>
            <OutFirstView>
                <OutFirstBtn
                    onPress={() => {
                        navigation.navigate(USER_PROFILE_NAME)
                    }}
                >
                    <AntDesign name="close" size={30} color="#5aa469" />
                </OutFirstBtn>
                <OutFirstBtn>
                    <AntDesign name="ellipsis1" size={30} color="#5aa469" />
                </OutFirstBtn>
            </OutFirstView>
            <OutTwoView>
                <OutFirstText>탈퇴하기</OutFirstText>
                <OutTwoText>잠깐! WMELON을 탈퇴하기 전에</OutTwoText>
                <OutThreeText>아래 정보를 확인해주세요</OutThreeText>
            </OutTwoView>
            <OutThreeView>
                <OutFourView>
                    <OutFourText>
                        관리 중인 서비스들은 해지되지 않아요{" "}
                        <MaterialCommunityIcons
                            name="face-woman"
                            size={24}
                            color="brown"
                        />
                    </OutFourText>
                    <OutFiveText>
                        WMELON을 탈퇴해도 WMELON에서 관리 중인 구독 서비스와
                        생활
                    </OutFiveText>
                    <OutSixText>
                        지출은 해지되지 않아요. 서비스 해지를 원해 탈퇴하는
                        거라면
                    </OutSixText>
                    <OutSevenText>절대 탈퇴하시면 안 돼요.</OutSevenText>
                </OutFourView>
            </OutThreeView>
            <OutFiveView>
                <OutSixView>
                    <OutEghitText>
                        처음부터 다시 가입해야 해요{" "}
                        <MaterialCommunityIcons
                            name="face-man"
                            size={24}
                            color="brown"
                        />
                    </OutEghitText>
                    <OutNineText>
                        탈퇴 회원의 정보는 15일간 임시 보관 후 완벽히
                        삭제되어요.
                    </OutNineText>
                    <OutTenText>
                        탈퇴하시면 회원가입부터 다시 해야 해요.
                    </OutTenText>
                </OutSixView>
            </OutFiveView>
            <OutSevenView>
                <OutTwoBtn>
                    <OutElevenText
                        onPress={() => {
                            navigation.navigate(USER_PROFILE_NAME)
                        }}
                    >
                        취소
                    </OutElevenText>
                </OutTwoBtn>
                <OutThreeBtn
                    onPress={() => {
                        navigation.navigate(OUT_REGISTOR_PW_NAME)
                    }}
                >
                    <OutTwelvenText>탈퇴</OutTwelvenText>
                </OutThreeBtn>
            </OutSevenView>
        </SafeAreaViews>
    )
}

const SafeAreaViews = styled.SafeAreaView`
    width: 100%;
    padding: 40px 20px;
    display: flex;
    flex: 1;
`

const OutFirstView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const OutFirstBtn = styled.TouchableOpacity``

const OutTwoView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const OutFirstText = styled.Text`
    font-size: 25px;
    font-weight: 800;
`

const OutTwoText = styled.Text`
    color: "rgb(90, 164, 105);";
    margin-top: 10px;
`

const OutThreeText = styled.Text`
    color: "rgb(90, 164, 105);";
`

const OutThreeView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const OutFourView = styled.View`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(90, 164, 105);
    border-radius: 20px;
    background-color: rgb(240, 247, 242);
    padding: 10px 10px 20px 20px;
    margin-top: 70px;
`

const OutFourText = styled.Text`
    font-size: 17px;
    font-weight: 600;
`

const OutFiveText = styled.Text`
    margin-top: 12px;

    font-size: 11px;

    color: #5aa469;
`

const OutSixText = styled.Text`
    font-size: 11px;
    color: #5aa469;
`

const OutSevenText = styled.Text`
    font-size: 11px;
    color: #5aa469;
`

const OutFiveView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const OutSixView = styled.View`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgb(90, 164, 105);
    border-radius: 20px;
    background-color: rgb(240, 247, 242);
    padding: 10px 10px 20px 20px;
    margin-top: 10px;
`

const OutEghitText = styled.Text`
    font-size: 17px;
    font-weight: 600;
`

const OutNineText = styled.Text`
    margin-top: 12px;

    font-size: 11px;
    color: #5aa469;
`

const OutTenText = styled.Text`
    font-size: 11px;
    color: #5aa469;
`

const OutSevenView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
`

const OutTwoBtn = styled.TouchableOpacity`
    width: 45%;
    box-sizing: border-box;
    border: 1px solid rgb(90, 164, 105);
    padding: 15px;
    border-radius: 20px;
    background-color: rgb(240, 247, 242);
`

const OutElevenText = styled.Text`
    text-align: center;
    font-size: 15px;
    font-weight: 600;
`

const OutThreeBtn = styled.TouchableOpacity`
    width: 45%;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 20px;
    background-color: #f66363;
`

const OutTwelvenText = styled.Text`
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: white;
`
