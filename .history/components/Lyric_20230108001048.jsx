import React from "react"
import {} from "react-native"
import styled from "@emotion/native"

const ScrollView = styled.ScrollView`
    margin-top: 40px;
`

const LyricText = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    line-height: 30px;
    white-space: pre-line;
`

export default function Lyric() {
    return (
        <ScrollView>
            <LyricText>
                {`Oh 어떡하지\nI like your outfit 벌써 궁금해 네 속옷까지\nWait till panty's droppin\nYou know about me\n기다려지지 밤이 기다렸지 그걸\n사실 Only one who poppin 소주 with me\n누가 줘도 원랜 안마시지Need your love,\nu feel me Oh so let's kickin\n네 쇄골부터허벅지까지 거기에만 시선이 가지\nYeah right now I gotta dive inYeah right now\nI gotta dive in Baby your body\non flame I missyour body all day\n당연히 nobody compared\n짠 할게 네 엉덩이에 건배\nBaby your body on flame\nI miss your body all day\n당연히nobody compared 짠 할게\n네 엉덩이에다 건배\n네 목소린 밤에 더예뻐\nso Slowly kissin on your rip so\nSo just play me play me play me play me \nplay me all night\nJust play me play me play meplay me play me\nso nice Oh 어떡하지 벌써 손이 바뻐 yeah\n 단추를 하나씩 눈은 감지마\nIt's okay you know like the way you are\n불이꺼진 채 아프면 얘기 해\n어색한 공기를 털어내\n괜히 피식 웃는 건왜인지 던져놓은 옷들은 내비둬 Hesitating no more plight we don'tcare 방안에 비 오네 자기를 위로해 Surfing on me 네 허린 wavy빠지지 않았으면 해 Drumming sound in ma room 난 안 힘들어 하나도해보자 하나 둘씩 Same time Same place Same vibes Same face 서로합을 짜기라도 한 듯이 네 목소린 밤에 더 예뻐 so Slowly kissin onyour rip so So just play me play me play me play me play me allnight Just play me play me play me play me play me so nice 다벗어서 다 던져놓자 저 옷들처럼 널브러져 있을까 아니면 우리아니면 그냥 하지 뭐 한 시간이면 Don't trip baby don't trip Juststrip baby just strip 벗어버려 designer 너도 원하는걸 다 알아Baby I'm gonna make you feel good Baby I'm gonna make you feelgood 네 목소린 밤에 더 예뻐 so Slowly kissin on your rip so Sojust play me play me play me play me play me all night Just playme play me play me play me play me so nice`}
            </LyricText>
        </ScrollView>
    )
}
