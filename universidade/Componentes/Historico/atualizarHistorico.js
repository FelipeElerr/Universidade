import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AtualizarHistoricoBanco from '../../API/Historico/atualizarHistoricoBanco';


export default function App(props) {
    const [cod_historico, setHistorico] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cod_turma, setTurma] = useState("");
    const [frequencia, setFrequencia] = useState("");
    const [nota, setNota] = useState("");

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#005c81' }}>
                <TextInput
                    value={cod_historico}
                    placeholder="Digite o código do histórico que será atualizado!"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setHistorico(text) }}
                />

                <TextInput
                    value={matricula}
                    placeholder="Digite a nova matícula!"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setMatricula(text) }}
                />

                <TextInput
                    value={cod_turma}
                    placeholder="Digite o novo código da turma"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setTurma(text) }}
                />

                <TextInput
                    value={frequencia}
                    placeholder="Digite a nova frequência"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setFrequencia(text) }}
                />

                <TextInput
                    value={nota}
                    placeholder="Digite a  nova nota"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setNota(text) }}
                />

                <AtualizarHistoricoBanco cod_historico={cod_historico} matricula={matricula} cod_turma={cod_turma} frequencia={frequencia} nota={nota} />

            </View>

        </>

    );
}