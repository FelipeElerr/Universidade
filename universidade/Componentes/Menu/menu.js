import React from 'react'
import { View, Button} from 'react-native'



export default function Menu(props) {
    return (
        <View style={{flex:1,backgroundColor:'#368986'}}>
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

        </View>
    );
}