import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';

import { Ionicons, Feather } from '@expo/vector-icons';

import { Top, HeaderTop, CircleImage, MainContent } from './style';

const Library: React.FC = () => {
    return (
        <Background>
            <Top>
                <HeaderTop>
                    <CircleImage />
                    <Text style={style.title}>Sua Biblioteca</Text>
                    <Ionicons
                        name="search-outline"
                        style={style.icons_search}
                        size={28}
                    />
                    <Feather
                        name="plus"
                        style={style.icons_plus}
                        size={28}
                    />
                </HeaderTop>
            </Top>
            <MainContent>
                
            </MainContent>
            <BarDown />
        </Background>

    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        color: '#fff',
        marginLeft: 20
    },
    icons_search: {
        right: 0,
        position: 'absolute',
        color: '#fff',
        marginRight: 80
    },
    icons_plus: {
        right: 0,
        position: 'absolute',
        color: '#fff',
        marginRight: 20
    }
})

export default Library;