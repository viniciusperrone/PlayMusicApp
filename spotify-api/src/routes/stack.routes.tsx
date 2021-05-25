import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode= "none"
        screenOptions={{
            cardStyle: {
                backgroundColor: '#FFF'
            }
        }}
    >

        <stackRoutes.Screen
            name="Dashboard"
            component=""
        />
        <stackRoutes.Screen 
            name="Search"
            component=""
        />
        <stackRoutes.Screen 
            name="Played"
            component=""
        />
        <stackRoutes.Screen 
            name="Library"
            component=""
        />

    </stackRoutes.Navigator>
)
