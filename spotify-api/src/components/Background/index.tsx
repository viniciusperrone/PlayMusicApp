import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StatusBar } from 'react-native'

const Background: React.FC = ({ children }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            width: '100%',
            height: '100%',
             
        }}>
            <StatusBar 
                animated={true}
                backgroundColor="#888599"
                barStyle={"dark-content"}
            />
            <LinearGradient
                colors={['#464769', '#1B1A1F']}
                style={{
                    flex: 1,
                }}
            >
                {children}
            </LinearGradient>
        </SafeAreaView>

    )
}

export default Background;