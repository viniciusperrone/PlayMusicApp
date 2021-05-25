import React from 'react';
import {
    View, Text
} from 'react-native';

import Background from '../../components/Background';
import BarDown from '../../components/BarDown';

const Search: React.FC = () => {
    return (
        <Background>
            <View>
                <Text>Search</Text>
            </View>
            <BarDown />
        </Background>
    )
}

export default Search;