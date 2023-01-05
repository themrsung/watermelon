import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"
import ScrollContents from "./components/ScrollContents"

const SafeAreaView = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
    flex: 1;

    margin: 30px 0;
`

export default function App() {
    return (
        <SafeAreaView>
            <Header />

            <ScrollContents />

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
