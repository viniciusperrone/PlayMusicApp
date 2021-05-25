import React from 'react';
import {
    View, Text
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown'

const Library: React.FC = () => {
    return (
        <Background>
            <View>
                <Text>Library</Text>
            </View>
            <BarDown />
        </Background>

    )
}

export default Library;