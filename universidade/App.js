import React from 'react'
import { View, Text, Button, BackHandler, ImageBackground } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CadastroAluno from './Componentes/cadastroAluno'
import CadastroDisciplina from './Componentes/cadastroDisciplina'
import CadastroProfessor from './Componentes/cadastroProfessor'
import CadastroTurma from './Componentes/cadastroTurma'
import CadastroHistorico from './Componentes/Historico/cadastroHistorico'
import DeletarHistorico from './Componentes/Historico/deletarHistorico'
import AtualizarHistorico from './Componentes/Historico/atualizarHistorico'
import Configurações from './Componentes/Configurações/configs'
import { BackgroundProvider } from './Componentes/Configurações/configs';
import PlanoDeFundo from './Componentes/planoDeFundo';

const Pilha = createNativeStackNavigator();

function TelasCadastro(props) {
    return (
        <>
        <PlanoDeFundo>
            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Cadastro de Aluno"
                    onPress={() => props.navigation.navigate('CadastroAluno')}
                />
            </View>

            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Cadastro de Disciplina"
                    onPress={() => props.navigation.navigate('CadastroDisciplina')}
                />
            </View>

            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Cadastro de Professor"
                    onPress={() => props.navigation.navigate('CadastroProfessor')}
                />
            </View>

            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Cadastro de Turma"
                    onPress={() => props.navigation.navigate('CadastroTurma')}
                />
            </View>

            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Cadastro de Historico"
                    onPress={() => props.navigation.navigate('CadastroHistorico')}
                />
            </View>

            <View style={{marginTop:20}}>
                <Button
                    color='#005c81'
                    title="Configurações"
                    onPress={() => props.navigation.navigate('Configurações')}
                />
            </View>
            </PlanoDeFundo>
        </>
    );
}


export default function App() {
    return (
        <BackgroundProvider>
            <PlanoDeFundo>
            <NavigationContainer independent={true}>
                <Pilha.Navigator>
                    <Pilha.Screen name='TelasCadastro' component={TelasCadastro} options={{ title: 'Opções de Cadastro' }} />
                    <Pilha.Screen name='CadastroAluno' component={CadastroAluno} />
                    <Pilha.Screen name='CadastroDisciplina' component={CadastroDisciplina} />
                    <Pilha.Screen name='CadastroProfessor' component={CadastroProfessor} />
                    <Pilha.Screen name='CadastroTurma' component={CadastroTurma} />
                    <Pilha.Screen name='CadastroHistorico' component={CadastroHistorico} />
                    <Pilha.Screen name='DeletarHistorico' component={DeletarHistorico} />
                    <Pilha.Screen name='AtualizarHistorico' component={AtualizarHistorico} />
                    <Pilha.Screen name='Configurações' component={Configurações} />
                </Pilha.Navigator>
            </NavigationContainer>
            </PlanoDeFundo>
        </BackgroundProvider>
    )
}


