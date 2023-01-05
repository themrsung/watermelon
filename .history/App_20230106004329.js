import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"

import ScrollContents from "./components/ScrollContents"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    background-color: bisque;

    display: flex;
    flex-direction: row;

    margin: 30px 0;
`

export default function App() {
    return (
        <SafeAreaView>
            <ScrollContents />

            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
