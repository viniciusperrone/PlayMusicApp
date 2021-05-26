import React from 'react';

import { Text, StyleSheet } from 'react-native'

import { Conteiner, Box, ConteinerText } from './style';

const BoxSongs: React.FC = () => {
    return(
        <Conteiner>
            <Box />
            <ConteinerText>
                <Text style={style.title}>Your Playlist</Text>
                <Text style={style.subtitle}>Playlist - Your Name</Text>
            </ConteinerText>
        </Conteiner>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10
    },
    subtitle: {
        fontSize: 12,
        color: '#A3A3A3',
        marginLeft: 10
    }
})

export default BoxSongs