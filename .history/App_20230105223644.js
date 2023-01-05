import { StatusBar } from "expo-status-bar"
import {} from "react-native"
import styled from "@emotion/native"
import Header from "./components/Header"

const SafeAreaView = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
`

export default function App() {
    return (
        <SafeAreaView>
            <Header />
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}
