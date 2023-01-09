import React from "react"
import styled from "@emotion/native"
import { View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function CreatePlayList() {
    return (
        <SafeAreaView>
            <View>
                <CreatePlayText>플레이리스트 등록/수정</CreatePlayText>
            </View>
            <SafeAreaInputView>
                <CreatePlayInput />
            </SafeAreaInputView>
            <CreatePlayIconView>
                <CreatePlayFirstText>
                    Luis Fonsi - Despacito
                </CreatePlayFirstText>
                <CreatePlayFirstIconBtn>
                    <AntDesign
                        name="close"
                        size={30}
                        color="color: rgba(224, 233, 224, 0.993);"
                    />
                </CreatePlayFirstIconBtn>
            </CreatePlayIconView>
            <CreatePlayIconTwoView>
                <CreatePlayTwoText>Punch - Say Yes</CreatePlayTwoText>
                <CreatePlayFirstIconBtn>
                    <AntDesign
                        name="close"
                        size={30}
                        color="color: rgba(224, 233, 224, 0.993);"
                    />
                </CreatePlayFirstIconBtn>
            </CreatePlayIconTwoView>
            <CreatePlayIconThreeView>
                <CreatePlayTwoText>Punch - Say Yes</CreatePlayTwoText>
                <CreatePlayFirstIconBtn>
                    <AntDesign
                        name="check"
                        size={30}
                        color="color: rgba(224, 233, 224, 0.993);"
                    />
                </CreatePlayFirstIconBtn>
            </CreatePlayIconThreeView>
            <CreatePlayIconFourView>
                <CreatePlayFourText>Luis Fonsi - Despacito</CreatePlayFourText>
            </CreatePlayIconFourView>
            <CreatePlayIconFourView>
                <CreatePlayFourText>Subeme la Radio</CreatePlayFourText>
            </CreatePlayIconFourView>
            <CreatePlayIconFourView>
                <CreatePlayFourText>Bella Ciao</CreatePlayFourText>
            </CreatePlayIconFourView>
            <CreatePlaySubmiBtn>
                <CreatePlayFiveText>추가하기</CreatePlayFiveText>
            </CreatePlaySubmiBtn>
        </SafeAreaView>
    )
}

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    padding-top: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

const CreatePlayText = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

const CreatePlayInput = styled.TextInput`
    width: 100%;
    box-sizing: border-box;
    border: 2px solid rgba(172, 177, 173, 0.6);
    /* border-radius: 6px; */
`
const SafeAreaInputView = styled.View`
    width: 80%;
    padding-top: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const CreatePlayIconView = styled.View`
    width: 80%;
    padding-top: 10px;
    margin-top: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    border: 1px solid rgba(201, 204, 201, 0.6);
    background-color: red;
`

const CreatePlayFirstText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: rgb(27, 27, 27);
    text-align: center;
    margin-bottom: 12px;
    margin-left: 10px;
`
const CreatePlayTwoText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: rgba(224, 233, 224, 0.993);
    text-align: center;
    margin-bottom: 12px;
    margin-left: 10px;
`

const CreatePlayFirstIconBtn = styled.TouchableOpacity`
    margin-bottom: 12px;
    margin-right: 10px;
`

const CreatePlayIconTwoView = styled.View`
    width: 80%;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    border: 1px solid rgba(201, 204, 201, 0.6);
    background-color: black;
`

const CreatePlayIconThreeView = styled.View`
    width: 80%;
    padding-top: 10px;
    margin-top: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    border: 1px solid rgba(201, 204, 201, 0.6);
    background-color: black;
`

const CreatePlayIconFourView = styled.View`
    width: 80%;
    padding-top: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
    border: 1px solid rgba(42, 43, 42, 0.6);
    background-color: #ffffff;
`
const CreatePlayFourText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: rgb(27, 27, 27);
    text-align: center;
    margin-bottom: 12px;
    margin-left: 10px;
`

const CreatePlaySubmiBtn = styled.TouchableOpacity`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid rgba(153, 155, 153, 0.6);
    background-color: rgb(49, 49, 49);
    border-radius: 20px;
    margin-top: 50px;
    padding: 20px;
`

const CreatePlayFiveText = styled.Text`
    font-size: 17px;
    color: rgba(224, 233, 224, 0.993);
`
