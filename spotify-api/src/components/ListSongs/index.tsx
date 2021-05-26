import React from 'react';

import {
    Text,
    StyleSheet,
    View
} from 'react-native';

import { Conteiner, Card } from './style';

const ListSongs: React.FC = () => {
    return(
        <Conteiner>
            <Card />
            <View>
                <Text style={style.title}>Your Playlist</Text>
                <Text style={style.subtitle}>Playlist - Your Name</Text>
            </View>
            
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

export default ListSongs;