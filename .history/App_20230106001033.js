import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"

const SafeAreaView = styled.SafeAreaView`
    display: flex;
    flex-direction: row;

    margin: 30px 0;
`

const ScrollContents = styled.ScrollView``

export default function App() {
    return (
        <SafeAreaView>
            <Header />

            <ScrollContents></ScrollContents>

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}