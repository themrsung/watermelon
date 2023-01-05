import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"
import ScrollContents from "./components/ScrollContents"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;

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
