import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';
const Routes = () => ( 
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;