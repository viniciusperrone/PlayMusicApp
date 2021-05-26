import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';
import EnviromnentButton from '../../components/EnvironmentButton';

import { library_environments } from '../../utils/json/library.json';

import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { Top, HeaderTop, CircleImage, MainContent, TopContent } from './style';

interface EnvironmentsProps {
    id: string;
    title: string;
}

const Library: React.FC = () => {
    const [environment, SetEnvironment] = useState<EnvironmentsProps[]>([]);

    const navigation = useNavigation();

    function handleSelected(){
        navigation.navigate('Played');
    }

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
                <TopContent>
                    <RectButton
                        style={style.button}
                    >
                        <Ionicons
                            name="arrow-down"
                            size={15}
                            color="#fff"
                            style={{
                                position: 'absolute'
                            }}
                        />
                        <Ionicons
                            name="arrow-up"
                            size={15}
                            color="#fff"
                            style={{
                                marginLeft: 20
                            }}

                        />
                    </RectButton>
                    <Text style={{
                        color: '#fff',
                        marginLeft: 10
                    }}>Tocados recentemente</Text>
                    <RectButton
                        style={style.button_barter}
                        onPress={handleSelected}
                    >
                        <Ionicons
                            name="layers"
                            size={20}
                            color="#fff"
                        />
                    </RectButton>

                </TopContent>
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
    button: {
        flexDirection: 'row',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_barter: {
        right: 0,
        position: 'absolute',
        marginRight: 15,
    }
})

export default Library;