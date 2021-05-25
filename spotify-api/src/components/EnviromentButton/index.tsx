import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface EnvironmentButtonsProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export default function EnvironmentButtons({
    title,
    active = false,
    ...rest
} : EnvironmentButtonsProps){
    <RectButton
        style={[
            style.container,
            active && style.containerActive
        ]}
    >
        <Text
            style={[
                style.text,
                active && style.textActive
            ]}
        >
            { title }
        </Text>

    </RectButton>
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 12
    }, 
    containerActive: {
        backgroundColor: '#DAF2E4'
    },
    text: {
        color: '#52665A',
    },
    textActive: {
        color: '#2B7A4B'
    }
})