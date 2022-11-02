import React from 'react'
import { View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CadastroAluno from '../cadastroAluno'
import CadastroDisciplina from '../cadastroDisciplina'
import CadastroProfessor from '../cadastroProfessor'
import CadastroTurma from '../cadastroTurma'
import CadastroHistorico from '../Historico/cadastroHistorico'
import DeletarHistorico from '../Historico/deletarHistorico'
import AtualizarHistorico from '../Historico/atualizarHistorico'
import VisualizarTurmas from './VizualizaTurmas/visualizarTurmas'
import VizualizaAlunos from './VizualizaTurmas/vizualizaAlunos'
import VizualizaHistoricoBanco from '../../API/VisualizaTurma/visualizaHistoricoBanco';



const Pilha = createNativeStackNavigator();

function OpcoesMenu(props) {
    return (
        <View style={{ flex: 1, backgroundColor: '#368986' }}>
            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Cadastro de Aluno"
                    onPress={() => props.navigation.navigate('CadastroAluno')}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Cadastro de Disciplina"
                    onPress={() => props.navigation.navigate('CadastroDisciplina')}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Cadastro de Professor"
                    onPress={() => props.navigation.navigate('CadastroProfessor')}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Cadastro de Turma"
                    onPress={() => props.navigation.navigate('CadastroTurma')}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Cadastro de Historico"
                    onPress={() => props.navigation.navigate('CadastroHistorico')}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    color='#005c81'
                    title="Visualizar turmas"
                    onPress={() => props.navigation.navigate('VisualizarTurmas')}
                />
            </View>

        </View>
    );
}

export default function Menu() {
    return (
                <NavigationContainer independent={true}>
                    <Pilha.Navigator>
                        <Pilha.Screen name='OpcoesMenu' component={OpcoesMenu} />
                        <Pilha.Screen name='CadastroAluno' component={CadastroAluno} />
                        <Pilha.Screen name='CadastroDisciplina' component={CadastroDisciplina} />
                        <Pilha.Screen name='CadastroProfessor' component={CadastroProfessor} />
                        <Pilha.Screen name='CadastroTurma' component={CadastroTurma} />
                        <Pilha.Screen name='CadastroHistorico' component={CadastroHistorico} />
                        <Pilha.Screen name='DeletarHistorico' component={DeletarHistorico} />
                        <Pilha.Screen name='AtualizarHistorico' component={AtualizarHistorico} />
                        <Pilha.Screen name='VisualizarTurmas' component={VisualizarTurmas} />
                        <Pilha.Screen name='VizualizaAlunos' component={VizualizaAlunos} />
                        <Pilha.Screen name='VizualizaHistoricoBanco' component={VizualizaHistoricoBanco} />
                    </Pilha.Navigator>
                </NavigationContainer>
    )
}