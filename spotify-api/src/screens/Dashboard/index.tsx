import React from 'react';
import {
    Text, StyleSheet, Image
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';

import SpotifyIcon from '../../assets/spotify-icon.png';

import { TopBar, MainContent } from './style';

const Dashboard: React.FC = () => {
    return (
        <Background>
            <TopBar>
                <Text style={style.text}>Boa noite</Text>
            </TopBar>
            <MainContent>
                <Image 
                    source={SpotifyIcon}
                    style={style.image}
                    resizeMode="contain"
                />

                {/* <SpotifyIcon height={300} width={300} fill="blue" /> */}
            </MainContent>
            <BarDown />
        </Background>

    )
}

const style = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: '200',
        color: '#fff'
    },
    image: {
        height: 300,
        width: 300
    }
})

export default Dashboard;