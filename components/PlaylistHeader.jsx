import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    padding: 30px 10px;
    box-sizing: border-box;
`
const IconWrap = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const IconBtn = styled.TouchableOpacity``

const IconImg = styled.Image``

export default function PlaylistHeader() {
    return (
        <Container>
            <IconWrap>
                <IconBtn>
                    <IconImg source={require("../assets/prev.png")} />
                </IconBtn>

                <IconBtn>
                    <IconImg source={require("../assets/more2.png")} />
                </IconBtn>
            </IconWrap>
        </Container>
    )
}
