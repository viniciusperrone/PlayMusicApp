import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Library from '../screens/Library';
import Played from '../screens/Played';
import Search from '../screens/Search';

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
            component={Dashboard}
        />
        <stackRoutes.Screen 
            name="Library"
            component={Library}
        />
        <stackRoutes.Screen 
            name="Played"
            component={Played}
        />
        <stackRoutes.Screen 
            name="Search"
            component={Search}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;
