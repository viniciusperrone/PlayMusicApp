import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import Background from '../../components/Background';
  
import { TopBar, MainContent } from './style';

const Dashboard: React.FC = () => {
    return (
        <Background>
            <TopBar>
                <Text style={style.text}>Boa noite</Text>
            </TopBar>
            <MainContent>
                <Text>Dashboard</Text>
            </MainContent>
        </Background>

    )
}

const style = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: '200',
        color: '#fff'
    }
})

export default Dashboard;