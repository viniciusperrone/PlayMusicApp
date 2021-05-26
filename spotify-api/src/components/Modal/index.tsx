import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Conteiner, ConteinerText, ConteinerButton } from './style';



const ModalComponent: React.FC = () => {

    const [visible, setVisible] = useState(true);

    function handleVisible(){
        return setVisible(false);
    }
    console.log(visible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <Conteiner>
                <Text style={style.title}>Classificar por</Text>
                <ConteinerText>
                    <Text style={style.subtitle}>Tocados recetemente</Text>
                    <Text style={style.subtitle}>Adicionados recetemente</Text>
                    <Text style={style.subtitle}>Ordem alfabética</Text>
                    <Text style={style.subtitle}>Criar</Text>
                </ConteinerText> 
                <ConteinerButton>
                    <TouchableOpacity
                        style={style.button}
                        onPress={handleVisible}
                    >
                        <Text style={style.text_button}>Cancelar</Text>
                    </TouchableOpacity>
                </ConteinerButton>
            </Conteiner>
        </Modal>

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
    button: {
        width: '100%',
        height: 20,
        backgroundColor: '#3ec'
    },
    text_button: {}
})

export default ModalComponent;