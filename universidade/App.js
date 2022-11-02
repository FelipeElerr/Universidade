import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Componentes/Home/home';
import Menu from './Componentes/Menu/menu';




const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: () => (
                        <Icon name="home" size={30} color="#900" />
                    )
                }}
            />

            <Tab.Screen name="Menu" component={Menu}
                options={{
                    tabBarLabel: "Menu",
                    tabBarIcon: () => (
                        <Icon name="tasks" size={30} color="black" />
                    )
                }}
            />

        </Tab.Navigator>
    );
}


export default function App() {
    return (
        <>
            <NavigationContainer independent={true}>
                <MyTabs />
            </NavigationContainer>
        </>
    )
}


