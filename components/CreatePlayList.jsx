import { SelectList } from "react-native-dropdown-select-list"
import { useEffect, useState } from "react"
import styled from "@emotion/native"
import { View, Button } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import { MY_PLAYLIST2_NAME } from "../navigation/NavContainer"
import {
    getMusicByArtistAndTitle,
    getMusicMetadataFromYouTube,
    getMusics
} from "../api/musicApi"
import {
    createPlaylist,
    deletePlaylist,
    editPlaylist,
    getPlaylist,
    getPlaylists
} from "../api/playlistsApi"

const SafeAreaViews = styled.SafeAreaView`
    width: 100%;
    padding: 40px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`
const TopWrap = styled.View`
    width: 100%;

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

const CreatePlayInput = styled.TextInput`
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(90, 164, 105, 0.6);

    &::placeholder {
        font-size: 15px;
        color: #368245;
    }
`
const CreatePlayDesInput = styled.TextInput`
    width: 100%;
    padding-bottom: 10px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(90, 164, 105, 0.6);

    &::placeholder {
        font-size: 13px;
        color: #368245;
    }
`

const SafeAreaInputView = styled.View`
    width: 100%;
    margin-top: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const CreatePlayIconView = styled.View`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 16px;
    background-color: rgba(181, 238, 184, 0.6);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const CreatePlayFirstText = styled.Text`
    width: 86%;

    font-size: 14px;
    font-weight: 500;
    color: #7da450;
`

const CreatePlayTwoText = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: #7da450;
    text-align: center;
`

const CreatePlayFirstIconBtn = styled.TouchableOpacity`
    width: 10%;
`

const CreatePlayIconTwoView = styled.View`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    background-color: rgba(181, 238, 184, 0.6);
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CreatePlaySelector = styled.View`
    width: 100%;
`
const SelectorTitle = styled.Text`
    margin-bottom: 10px;

    color: #5aa469;
    font-size: 16px;
    font-weight: bold;
`

export default function CreatePlaylist({ route }) {
    const { isEditing, originalPlaylistUuid } = route.params
    const navigation = useNavigation()

    const [selectedMusicUuids, setSelectedMusicUuids] = useState([])

    const [title, setTitle] = useState("")
    const [musics, setMusics] = useState([])

    const fetchMusics = async () => {
        const fetchedMusics = await getMusics()

        if (!fetchedMusics || fetchedMusics.length < 1) {
            return
        }

        let musicsAsCompatibleList = []
        fetchedMusics.forEach(async (fm) => {
            const musicMetadata = await getMusicMetadataFromYouTube(fm.uuid)

            musicsAsCompatibleList.push({
                key: fm.uuid,
                value: musicMetadata.artistAndTitle
            })
        })

        setMusics(musicsAsCompatibleList)
    }

    useEffect(() => {
        fetchMusics()
    }, [])

    const [originalPlaylist, setOriginalPlaylist] = useState({})

    const fetchOriginalPlaylist = async () => {
        const op = await getPlaylist(originalPlaylistUuid)
        setOriginalPlaylist(op)
    }

    useEffect(() => {
        fetchOriginalPlaylist()
    }, [])

    // useEffect(() => {
    //     if (!isEditing) {
    //         return
    //     }

    //     if (originalPlaylist === {}) {
    //         return
    //     }

    //     setSelectedMusicUuids(originalPlaylist.content)
    //     setTitle(originalPlaylist.title)
    // }, [originalPlaylist])

    const onDeleteMusicUuidFromSelectedMusicUuids = (musicUuidToDelete) => {
        if (!selectedMusicUuids.includes(musicUuidToDelete)) {
            return
        }

        const newSelectedMusicUuids = selectedMusicUuids.filter(
            (u) => u !== musicUuidToDelete
        )
        setSelectedMusicUuids(newSelectedMusicUuids)
    }

    const checkIfInfoIsValid = () => {
        return title !== "" && selectedMusicUuids.length > 0
    }

    const onInvalidInfo = () => {
        // 제목이나 플리 빈칸 시 실행됩니다.
    }

    const onCompleteCreatingPlaylist = async () => {
        const newPlaylist = {
            title: title,
            content: selectedMusicUuids
        }

        if (!checkIfInfoIsValid()) {
            onInvalidInfo()
            return
        }

        const response = await createPlaylist(newPlaylist)
        navigation.goBack()
    }

    const onCompleteEditingPlaylist = async () => {
        if (!checkIfInfoIsValid()) {
            onInvalidInfo()
            return
        }

        const response = await editPlaylist(originalPlaylistUuid, {
            title: title,
            id: originalPlaylistUuid,
            uuid: originalPlaylistUuid,
            content: selectedMusicUuids
        })

        navigation.goBack()
    }

    getPlaylists()

    const onDeletePlaylist = async () => {
        const response = await deletePlaylist(originalPlaylistUuid)
        navigation.goBack()
    }

    return (
        <SafeAreaViews>
            <TopWrap>
                <PrevBtn
                    onPress={() => {
                        navigation.navigate(MY_PLAYLIST2_NAME)
                    }}
                >
                    <AntDesign name="left" size={20} color="#5aa469" />
                </PrevBtn>

                <CreatePlayText>
                    {isEditing ? "플레이리스트 수정" : "플레이리스트 등록"}
                </CreatePlayText>

                {isEditing ? (
                    <SuccessBtn onPress={onCompleteEditingPlaylist}>
                        <SuccessBtnText>완료</SuccessBtnText>
                    </SuccessBtn>
                ) : (
                    <SuccessBtn onPress={onCompleteCreatingPlaylist}>
                        <SuccessBtnText>완료</SuccessBtnText>
                    </SuccessBtn>
                )}
            </TopWrap>

            <SafeAreaInputView>
                <CreatePlayInput
                    placeholder="플레이리스트 제목을 입력해주세요."
                    placeholderTextColor={"#7da450"}
                    value={title}
                    onChangeText={setTitle}
                />
                {/* <CreatePlayDesInput
                    placeholder="소개글을 입력해주세요."
                    placeholderTextColor={"#7da450"}
                /> */}
            </SafeAreaInputView>

            <CreatePlaySelector
                style={{ paddingTop: 40, justifyContent: "center" }}
            >
                <SelectorTitle>곡 추가</SelectorTitle>
                <SelectList
                    setSelected={(val) => {
                        const key = musics.filter((m) => m.value === val)[0].key
                        setSelectedMusicUuids([...selectedMusicUuids, key])
                    }}
                    boxStyles={{
                        backgroundColor: "white",
                        height: 60,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "rgb(90, 164, 105);",
                        borderStyle: "solid"
                    }}
                    inputStyles={{ color: "#7da450" }}
                    dropdownStyles={{
                        backgroundColor: "rgb(255, 255, 255)",
                        borderWidth: 1,
                        borderColor: "rgb(90, 164, 105);",
                        borderStyle: "solid"
                    }}
                    // dropdownItemStyles={{ marginHorizontal: 10 }}
                    dropdownTextStyles={{
                        color: "#7da450"
                    }}
                    maxHeight={200}
                    data={musics}
                    save="value"
                />
            </CreatePlaySelector>

            <CreatePlayIconView>
                {selectedMusicUuids.length > 0 &&
                    selectedMusicUuids.map((uuid) => {
                        const artistAndTitle = musics.filter(
                            (m) => m.key === uuid
                        )[0].value
                        return (
                            <View
                                key={uuid}
                                style={{
                                    width: "100%",
                                    marginBottom: 10,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <CreatePlayFirstText>
                                    {artistAndTitle}
                                </CreatePlayFirstText>
                                <CreatePlayFirstIconBtn
                                    onPress={() => {
                                        onDeleteMusicUuidFromSelectedMusicUuids(
                                            uuid
                                        )
                                    }}
                                >
                                    <AntDesign
                                        name="close"
                                        size={20}
                                        color="color: rgba(71, 135, 109, 0.993);"
                                    />
                                </CreatePlayFirstIconBtn>
                            </View>
                        )
                    })}
            </CreatePlayIconView>
            {isEditing && (
                <Button onPress={onDeletePlaylist} title={"삭제하기"}></Button>
            )}
        </SafeAreaViews>
    )
}
