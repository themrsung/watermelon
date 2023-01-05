import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    padding: 10px;
    background-color: lightpink;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoImg = styled.Image`
    width: 80px;
    height: 80px;
`

const IconButtonWrap = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 20%;
    height: 100%;
`

const CouponButton = styled.TouchableOpacity``

const MenuBarImg = styled.Image`
    width: 24px;
    height: 24px;
`

const MenuButton = styled.TouchableOpacity``

const CouponImg = styled.Image`
    width: 24px;
    height: 24px;
`

export default function Header() {
    return (
        <Container>
            <LogoImg source={require("../assets/LightBG.png")} />

            <IconButtonWrap>
                <CouponButton>
                    <CouponImg source={require("../assets/coupon.png")} />
                </CouponButton>

                <MenuButton>
                    <MenuBarImg source={require("../assets/menu_bar.png")} />
                </MenuButton>
            </IconButtonWrap>
        </Container>
    )
}
