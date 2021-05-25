import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';
import { Entypo, Ionicons } from '@expo/vector-icons';

import { InputConteiner, Input } from './style';
const Search: React.FC = () => {
    return (
        <Background>
            <Text style={style.title}>
                Buscar
            </Text>
            <InputConteiner>
                <Ionicons 
                    name="search-outline"
                    size={28}
                    color="#575464"
                />
                <Input 
                    placeholder="Artistas, músicas ou podcasts"
                />
            </InputConteiner>
            <BarDown />
        </Background>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 32,
        color: '#fff',
        marginTop: 50,
        marginLeft: 10
    }
})

export default Search;