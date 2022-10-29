import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaHistorico from '../API/Historico/consultaHistorico'
import AdicionaHistorico from '../API/Historico/adicionaHistorico'

export default function App(props) {

  const [matricula, setMatricula] = useState("");
  const [cod_turma, setTurma] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [nota, setNota] = useState("");

  return (
    <>
      <View style={{ flex: 1 }}>
        <TextInput
          value={matricula}
          placeholder="Digite a matícula!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setMatricula(text) }}
        />

        <TextInput
          value={cod_turma}
          placeholder="Digite o código da turma"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setTurma(text) }}
        />

        <TextInput
          value={frequencia}
          placeholder="Digite a frequência"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setFrequencia(text) }}
        />

        <TextInput
          value={nota}
          placeholder="Digite a nota"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setNota(text) }}
        />

        <AdicionaHistorico matricula={matricula} cod_turma={cod_turma} frequencia={frequencia} nota={nota}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Históricos Cadastrados:
          </Text>
        </View>
        <ConsultaHistorico />
      </View>

    </>

  );
}