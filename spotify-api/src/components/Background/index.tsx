import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StatusBar } from 'react-native';

const color = '#191414 #464769'; 

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
                colors={['#535353', '#141415']}
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