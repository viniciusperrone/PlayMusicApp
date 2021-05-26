import React from 'react';

import { Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Conteiner, ConteinerText, ConteinerButton} from './style';


const Modal: React.FC = () => {
    return(
        <Conteiner>
            <Text style={style.title}>Classificar por</Text>
            <ConteinerText>
                <Text style={style.subtitle}>Tocados recetemente</Text>
                <Text style={style.subtitle}>Adicionados recetemente</Text>
                <Text style={style.subtitle}>Ordem alfabética</Text>
                <Text style={style.subtitle}>Criar</Text>
            </ConteinerText>
            <ConteinerButton>
                <RectButton
                    style={style.button}
                >
                    <Text style={style.text_button}>Cancelar</Text>
                </RectButton>
            </ConteinerButton>
        </Conteiner>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        color: '#fff'
    },
    subtitle: {
        fontSize: 10,
        color: '#fff'
    },
    button: {},
    text_button: {}
})

export default Modal;