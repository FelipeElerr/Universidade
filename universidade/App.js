import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Componentes/Home/home';
import Menu from './Componentes/Menu/menu';
import Configuracoes from './Componentes/Configuracoes/configuracoes';

import { BackgroundProvider } from './Componentes/Configuracoes/configuracoes';
import PlanoDeFundo from './Componentes/Configuracoes/planoDeFundo';

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

            <Tab.Screen name="Configuracoes" component={Configuracoes}
                options={{
                    tabBarLabel: "Configurações",
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
            <BackgroundProvider>
                    <NavigationContainer independent={true}>
                        <MyTabs />
                    </NavigationContainer>
            </BackgroundProvider>
        </>
    )
}


