import {} from "react-native-gesture-handler"
import BottomNav from "./BottomNav"
import Header from "./Header"
import MusicControl from "./MusicControl"
import ScrollContents from "./ScrollContents"

export default function Home() {
    return (
        <>
            <Header />
            <ScrollContents />
            <MusicControl />
            <BottomNav />
        </>
    )
}
