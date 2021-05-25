import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Background: React.FC = ({ children }) => {
    return (
        <LinearGradient
            colors={['#464769', '#1B1A1F']}
            style={{
                flex: 1,
                paddingTop: 50,
            }}
        >
            {children}
        </LinearGradient>
    )
}

export default Background;