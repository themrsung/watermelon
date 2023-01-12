import React, { useEffect, useState } from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { getMusic } from "../api/musicApi"
import { store } from "../redux/stores"
import { useSelector } from "react-redux"

const Container = styled.View`
    width: 100%;
    height: 100px;
`

const ScrollView = styled.ScrollView`
    width: 100%;
    margin-top: 40px;
`

const LyricText = styled.Text`
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    line-height: 30px;
    white-space: pre-line;
`

export default function Lyric() {
    const currentMusicUuid = useSelector((state) => state.currentMusic.music)
    const [music, setMusic] = useState({})

    const fetchMusic = async () => {
        const m = await getMusic(currentMusicUuid)

        if (!m) {
            return
        }

        setMusic(m)
    }

    useEffect(() => {
        fetchMusic()
    }, [currentMusicUuid])

    return (
        <Container>
            <ScrollView>
                <LyricText>
                    {`${music.lyrics || "가사가 지원되지 않는 곡입니다."}`}
                </LyricText>
            </ScrollView>
        </Container>
    )
}
