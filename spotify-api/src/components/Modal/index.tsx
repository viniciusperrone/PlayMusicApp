import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, Modal, TouchableOpacity, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Conteiner, ConteinerText, ConteinerButton, ConteinerTop } from './style';

const ModalComponent: React.FC = () => {

    const [visible, setVisible] = useState(true);

    function handleVisible() {
        return setVisible(false);
    }

    useEffect(() => {
        async function Story(){
            const selectedItem = await AsyncStorage.getItem('selected');
            return console.log(selectedItem);
        }
        
        Story();

    }, []);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <Conteiner>
                <ConteinerTop>
                    <Text style={style.title}>Classificar por</Text>
                </ConteinerTop>
                <ConteinerText>
                    <Text style={style.subtitle}>Tocados recetemente</Text>
                    <Text style={style.subtitle}>Adicionados recetemente</Text>
                    <Text style={style.subtitle}>Ordem alfabética</Text>
                    <Text style={style.subtitle}>Criar</Text>
                </ConteinerText>
                <TouchableOpacity
                    style={style.button}
                    onPress={handleVisible}
                >
                    <Text style={style.text_button}>Cancelar</Text>
                </TouchableOpacity>
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
        fontSize: 16,
        color: '#fff'
    },
    button: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_button: {
        fontSize: 18,
        color: '#aeaeae'
    }
})

export default ModalComponent;