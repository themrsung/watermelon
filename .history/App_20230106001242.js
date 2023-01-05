import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"
import FavoriteMusic from "./components/FavoriteMusic"

const SafeAreaView = styled.SafeAreaView`
    display: flex;
    flex-direction: row;

    margin: 30px 0;
`

const ScrollContents = styled.ScrollView`
    width: 100%;
    height: 700px;
    background-color: yellow;
`

export default function App() {
    return (
        <SafeAreaView>
            <Header />

            <ScrollContents>
                <FavoriteMusic></FavoriteMusic>
            </ScrollContents>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
