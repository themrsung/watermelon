import React from "react"
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function PlayList() {
    const data = [
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Hype boy",
            singer: "NewJeans"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Mise-en-Scene",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Black Mamba",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Island",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Beware",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Forever",
            singer: "asspa"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image2.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        },
        {
            image: <Image source={require("../assets/image1.png")} />,
            title: "Sequence",
            singer: "IZ*ONE"
        }
    ] //길이가 긴 Array 라고 가정
    return (
        <>
            <Text style={styles.Text}>Panorama와(과) 비슷한 아티스트</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                // ItemSeparatorComponent={<View style={{ height: 5 }} />}
                data={data}
                renderItem={({ item, i }) => (
                    <View style={styles.container} key={i}>
                        <View style={styles.imagePosition}>
                            <Text style={styles.itemImage}>{item.image}</Text>
                        </View>
                        <View style={styles.itemGroup}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSinger}>{item.singer}</Text>
                        </View>

                        <View style={styles.itemIcon}>
                            <TouchableOpacity>
                                <AntDesign
                                    name="pluscircleo"
                                    size={30}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    Text: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        marginHorizontal: 8,
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: "#343534",
        color: "white",
        fontWeight: "700"
    },
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
