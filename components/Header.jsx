import React from "react"
import {} from "react-native"
import styled from "@emotion/native"
import { useNavigation } from "@react-navigation/core"
import { LOGIN_NAME } from '../navigation/NavContainer'

const Container = styled.View`
    width: 100%;
    padding: 10px 24px 10px 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoImg = styled.Image`
    width: 100px;
    height: 100px;
`

const IconButtonWrap = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 20%;
    height: 100%;
`

const CouponButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

const MenuBarImg = styled.Image`
    width: 100%;
`

const MenuButton = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`

const CouponImg = styled.Image`
    width: 100%;
`

export default function Header() {
    const navigation = useNavigation()

    return (
        <Container>
            <LogoImg source={require("../assets/LightBG.png")} />

            <IconButtonWrap>
                <CouponButton>
                    <CouponImg source={require("../assets/coupon.png")} />
                </CouponButton>

                <MenuButton
                    onPress={() => {
                        navigation.navigate(LOGIN_NAME)
                    }}
                >
                    <MenuBarImg source={require("../assets/menu_bar.png")} />
                </MenuButton>
            </IconButtonWrap>
        </Container>
    )
}
