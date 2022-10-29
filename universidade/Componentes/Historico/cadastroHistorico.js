import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ConsultaHistorico from '../../API/Historico/consultaHistorico'
import AdicionaHistorico from '../../API/Historico/adicionaHistorico'

export default function App(props) {

  const [matricula, setMatricula] = useState("");
  const [cod_turma, setTurma] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [nota, setNota] = useState("");

  return (
    <>
      <View style={{ flex: 1, backgroundColor:'#005c81' }}>
        <TextInput
          value={matricula}
          placeholder="Digite a matícula!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setMatricula(text) }}
        />

        <TextInput
          value={cod_turma}
          placeholder="Digite o código da turma"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setTurma(text) }}
        />

        <TextInput
          value={frequencia}
          placeholder="Digite a frequência"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setFrequencia(text) }}
        />

        <TextInput
          value={nota}
          placeholder="Digite a nota"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setNota(text) }}
        />

        <AdicionaHistorico matricula={matricula} cod_turma={cod_turma} frequencia={frequencia} nota={nota} />
        <View>
          <Button
            color='#f84339'
            title="Deletar Histórico"
            onPress={() => props.navigation.navigate('DeletarHistorico')}
          />
        </View>
        <View>
          <Button
            color='#e79a32'
            title="Atualizar Histórico"
            onPress={() => props.navigation.navigate('AtualizarHistorico')}
          />
        </View>

        <View>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Históricos Cadastrados:
          </Text>
        </View>
        <ConsultaHistorico />
      </View>

    </>

  );
}