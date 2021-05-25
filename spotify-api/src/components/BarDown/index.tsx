import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FooterBar, ButtonNav } from './style';
import { Entypo, Ionicons } from '@expo/vector-icons';

const BarDown: React.FC = () => {
    return (
        <FooterBar>
            <ButtonNav>
                <Entypo
                    name="home"
                    size={30}
                    color="#fff"
                />
                <Text style={style.text}>
                    Início
                </Text>
            </ButtonNav>
            <ButtonNav>
                <Ionicons
                    name="search"
                    size={30}
                    color="#fff"
                />
                <Text style={style.text}>
                    Buscar
                </Text>
            </ButtonNav>
            <ButtonNav>
                <Ionicons
                    name="md-library-outline"
                    size={30}
                    color="#fff"
                />
                <Text style={style.text}>
                    Sua Biblioteca
                </Text>
            </ButtonNav>

            {/* <Entypo
                name="home"
                size={32}
                color="#fff"
            />

            <Ionicons
                name="search"
                size={32}
                color="#fff"
            />

            <Ionicons
                name="md-library-outline"
                size={32}
                color="#fff"
            /> */}

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