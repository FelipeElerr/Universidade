import React from 'react'
import {View, Text, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CadastroAluno from './Componentes/cadastroAluno'
import CadastroDisciplina from './Componentes/cadastroDisciplina'
import CadastroProfessor from './Componentes/cadastroProfessor'
import CadastroTurma from './Componentes/cadastroTurma'
import CadastroHistorico from './Componentes/cadastroHistorico'

const Pilha = createNativeStackNavigator();

function TelasCadastro(props){
  return(
    <View>

        <Button
                style = {{backgroundColor:'blue'}}
                title = "Cadastro de Aluno"
                onPress = {()=>props.navigation.navigate('CadastroAluno')} 
        />

        <Button
                style = {{backgroundColor:'green'}}
                title = "Cadastro de Disciplina"
                onPress = {()=>props.navigation.navigate('CadastroDisciplina')} 
        />

        <Button
                style = {{backgroundColor:'blue'}}
                title = "Cadastro de Professor"
                onPress = {()=>props.navigation.navigate('CadastroProfessor')} 
        />

        <Button
                style = {{backgroundColor:'green'}}
                title = "Cadastro de Turma"
                onPress = {()=>props.navigation.navigate('CadastroTurma')} 
        />


        <Button
                style = {{backgroundColor:'blue'}}
                title = "Cadastro de Historico"
                onPress = {()=>props.navigation.navigate('CadastroHistorico')} 
        />


    </View>    
  );
}


export default function App(){
    return(

        <NavigationContainer independent={true}>
            <Pilha.Navigator>
                <Pilha.Screen name='TelasCadastro' component={TelasCadastro} options={{title:'Opções de Cadastro'}}/>
                <Pilha.Screen name='CadastroAluno' component={CadastroAluno}/>
                <Pilha.Screen name='CadastroDisciplina' component={CadastroDisciplina}/>
                <Pilha.Screen name='CadastroProfessor' component={CadastroProfessor}/>
                <Pilha.Screen name='CadastroTurma' component={CadastroTurma}/>
                <Pilha.Screen name='CadastroHistorico' component={CadastroHistorico}/>
            </Pilha.Navigator>
        </NavigationContainer>
        
    )
}


