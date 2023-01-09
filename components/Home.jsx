import { ScrollView } from "react-native-gesture-handler"
import BottomNav from "./BottomNav"
import Header from "./Header"
import MusicControl from "./MusicControl"

export default function Home() {
    return (
        <>
            <Header />
            <ScrollView />
            <MusicControl />
            <BottomNav />
        </>
    )
}
