import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Background from '../../components/Background';
import ChevronIcon from '../../components/icons/Chevron';

import { TopBar, TopLeft, TopMiddle, TopRight } from './style';

const Played: React.FC = () => {
    return (
        <Background>
            <LinearGradient
                colors={['#464769', '#1B1A1F']}
                style={{
                    flex: 1,
                    paddingTop: 50,
                }}>
                <TopBar>
                    <TopLeft>
                        <ChevronIcon />
                    </TopLeft>
                    <TopMiddle>
                        <Text style={style.title}>Tocando Podcast</Text>
                    </TopMiddle>
                    <TopRight></TopRight>
                </TopBar>
            </LinearGradient>
        </Background>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#fff'
    },
    subtitle: {
        color: '#fff'
    }
})

export default Played;