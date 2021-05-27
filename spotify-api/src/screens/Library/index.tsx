import React, { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, FlatList, ScrollView, AsyncStorage
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';
import EnviromnentButton from '../../components/EnvironmentButton';
import ListSongs from '../../components/ListSongs';
import BoxSongs from '../../components/BoxSongs';
import Modal from '../../components/Modal';

import { library_environments } from '../../utils/json/library.json';

import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { Top, HeaderTop, CircleImage, MainContent, TopContent } from './style';

interface EnvironmentsProps {
    id: string;
    title: string;
}

const Library: React.FC = () => {
    const [environment, SetEnvironment] = useState<EnvironmentsProps[]>([]);
    const [changedContent, setChangedContent] = useState(false);
    const [modal, setModal] = useState(false);
    const [selectedSongs, setSelectedSongs] = useState('');

    const Store = async (key: string, value: string) => {
        return await AsyncStorage.setItem(key, value);
    }
    
    const navigation = useNavigation();  

    function handleSelected() {
        navigation.navigate('Played');
    }

    function handleModal() {
        if (modal === false) {
            return setModal(true);
        }
        else {
            return setModal(false);
        }
    }

    function handleContent() {
        if (changedContent === false) {
            return setChangedContent(true);
        }
        else {
            return setChangedContent(false);
        }
    }

    useEffect(() => {
        return SetEnvironment(library_environments);
    }, []);
    useEffect(() => {
        async function fetchStore(){
            await Store('selected', 'Tocados recentemente');
            const selected = await AsyncStorage.getItem('selected');
            return setSelectedSongs(String(selected));
        }
        fetchStore();
    }, [])


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
                        onPress={handleModal}
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
                    }}>{selectedSongs}</Text>
                    <RectButton
                        style={style.button_barter}
                        onPress={handleContent}
                    >
                        {
                            changedContent ?

                                <Ionicons
                                    name="list"
                                    size={22}
                                    color="#fff"
                                />
                                :
                                <Ionicons
                                    name="layers"
                                    size={22}
                                    color="#fff"
                                />
                        }
                    </RectButton>
                </TopContent>
                {
                    changedContent ?
                    <ScrollView
                        style={{
                            flex: 1,
                            marginBottom: 60
                        }}
                    >
                        <View style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                                <BoxSongs />
                                <BoxSongs />
                                <BoxSongs />
                                <BoxSongs />
                                <BoxSongs />
                                <BoxSongs />
                        </View>
                    </ScrollView>
                        
                        :
                        <View style={{
                            flex: 1,
                        }}>
                            <ScrollView style={{
                                flex: 1,
                                marginBottom: 60
                            }}>
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                                <ListSongs />
                            </ScrollView>
                        </View>

                }
            </MainContent>
            { modal ? <Modal /> : null}
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