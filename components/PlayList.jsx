import React from "react"
import { StyleSheet } from "react-native"
import styled from "@emotion/native"
import MusicControl from "./MusicControl"
import BottomNav from "./BottomNav"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistList from "./PlaylistList"

const SafeAreaView = styled.SafeAreaView`
    width: 100%;
    // background-color: bisque;

    display: flex;
    flex-direction: column;
    flex: 1;
`

export default function PlayList() {
    return (
        <SafeAreaView>
            <PlaylistHeader />

            <PlaylistList />

            <MusicControl />
            <BottomNav />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        marginHorizontal: 8,
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: "#343534"
    },

    itemImage: {
        position: "relative",
        width: "70%",
        height: 120,
        bottom: 50
    },
    itemGroup: {
        marginRight: 130,
        width: "27%"
    },

    itemTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "white"
    },
    itemSinger: {
        paddingTop: 6,
        fontSize: 15,
        color: "#a8a4a8",
        fontWeight: "500"
    },
    itemIcon: {
        marginRight: 10,
        marginTop: 15
    }
})
