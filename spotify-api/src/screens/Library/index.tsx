import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';
import EnviromnentButton from '../../components/EnvironmentButton';

import { library_environments } from '../../utils/json/library.json';

import { Ionicons, Feather } from '@expo/vector-icons';

import { Top, HeaderTop, CircleImage, MainContent } from './style';

interface EnvironmentsProps{
    id: string;
    title: string;
}

const Library: React.FC = () => {
    const[environment, SetEnvironment] = useState<EnvironmentsProps[]>([]);
    
    useEffect(() => {
        return SetEnvironment(library_environments);
    }, []);

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
                <View>
                    <FlatList 
                        data={environment}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <EnviromnentButton
                                title={item.title}
                                active={false}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={style.enviromentList}
                    />
                </View>
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
    },
    enviromentList: {
        width: 'auto',
        minWidth: 600,
        marginLeft: -20,
        marginRight: 20,  
        justifyContent: 'center',
    },
})

export default Library;