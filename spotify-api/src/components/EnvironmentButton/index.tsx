import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface EnvironmentButtonsProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

const EnvironmentButtons = ({
    title,
    active = false,
    ...rest
}: EnvironmentButtonsProps) => {
    return (
        <RectButton
            style={[
                style.container,
                active && style.containerActive
            ]}
            {...rest}
        >
            <Text
                style={[
                    style.text,
                    active && style.textActive
                ]}
            >
                {title}
            </Text>

        </RectButton>

    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#464769',
        backgroundColor: '#fff',
        width: 'auto', 
        minWidth: 80, 
        padding: 10,
        height: 30,
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
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
});

export default EnvironmentButtons;

const teste = '#52665A'