import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import CadastroAluno from './Componentes/cadastroAluno'
import CadastroDisciplina from './Componentes/cadastroDisciplina'
import CadastroProfessor from './Componentes/cadastroProfessor'
import CadastroTurma from './Componentes/cadastroTurma'
import CadastroHistorico from './Componentes/Historico/cadastroHistorico'
import DeletarHistorico from './Componentes/Historico/deletarHistorico'
import AtualizarHistorico from './Componentes/Historico/atualizarHistorico';
import Home from './Componentes/Home/home';
import Menu from './Componentes/Menu/menu';

const Pilha = createNativeStackNavigator();
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
                <Pilha.Navigator>
                    <Pilha.Screen name='CadastroAluno' component={CadastroAluno} />
                    <Pilha.Screen name='CadastroDisciplina' component={CadastroDisciplina} />
                    <Pilha.Screen name='CadastroProfessor' component={CadastroProfessor} />
                    <Pilha.Screen name='CadastroTurma' component={CadastroTurma} />
                    <Pilha.Screen name='CadastroHistorico' component={CadastroHistorico} />
                    <Pilha.Screen name='DeletarHistorico' component={DeletarHistorico} />
                    <Pilha.Screen name='AtualizarHistorico' component={AtualizarHistorico} />
                </Pilha.Navigator>
            </NavigationContainer>

            <NavigationContainer independent={true}>
                <MyTabs />
            </NavigationContainer>
        </>
    )
}


