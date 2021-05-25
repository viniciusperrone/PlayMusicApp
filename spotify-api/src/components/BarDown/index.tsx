import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FooterBar, ButtonNav } from './style';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const BarDown: React.FC = () => {

    const navigation = useNavigation();

    function handleDashboardSelected(){
        navigation.navigate('Dashboard');
    }
    function handleSearchSelected(){
        navigation.navigate('Search');
    }
    function handleLibrarySelected(){
        navigation.navigate('Library');
    }
    return (
        <FooterBar>
            <ButtonNav 
                onPress={handleDashboardSelected}
            >
                <Entypo
                    name="home"
                    size={30}
                    color="#fff"
                />
                <Text style={style.text}>
                    Início
                </Text>
            </ButtonNav>
            <ButtonNav   
                onPress={handleSearchSelected}
            >
                <Ionicons
                    name="search"
                    size={30}
                    color="#fff"
                /> 
                <Text style={style.text}>
                    Buscar
                </Text>
            </ButtonNav>
            <ButtonNav
                onPress={handleLibrarySelected}
            >
                <Ionicons
                    name="md-library-outline"
                    size={30}
                    color="#fff"
                />
                <Text style={style.text}>
                    Sua Biblioteca
                </Text>
            </ButtonNav>
        </FooterBar>

    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 10,
        color: '#FFF'
    }
})

export default BarDown;