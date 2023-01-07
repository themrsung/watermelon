import React from "react"
import { WebView } from "react-native"
import styled from "@emotion/native"

const Container = styled.View`
    width: 100%;
    height: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #ffffe9;
`

const CurrentMVTitleWrap = styled.View`
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`

const AllViewBtn = styled.TouchableOpacity``

const AllViewText = styled.Text`
    color: #9abc74;
    font-size: 12px;
`

const CurrentMVTitle = styled.Text`
    color: #5aa469;
    font-size: 22px;
    font-weight: 700;
`

const MVView = styled.View``

export default function CurrentMV() {
    return (
        <Container>
            <CurrentMVTitleWrap>
                <CurrentMVTitle>최신MV</CurrentMVTitle>
                <AllViewBtn>
                    <AllViewText>전체보기</AllViewText>
                </AllViewBtn>
            </CurrentMVTitleWrap>

            <MVView>
                <WebView
                    scalesPageToFit={true}
                    bounces={false}
                    javaScriptEnabled
                    style={{ height: 500, width: 300 }}
                    source={{
                        html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <div id="baseDiv">${(
                          <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/eTlUz2SBRfE"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                          />
                      )}</div> //<--- add your iframe here
                    </body>
                  </html>
            `
                    }}
                    automaticallyAdjustContentInsets={false}
                />
            </MVView>
        </Container>
    )
}
