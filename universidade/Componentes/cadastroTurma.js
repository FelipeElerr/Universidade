import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaTurma from '../API/Turma/consultaTurma'
import AdicionaTurma from '../API/Turma/adicionaTurma'
import PlanoDeFundo from './planoDeFundo'

export default function App(props) {

  const [cod_disc, setDisc] = useState("");
  const [cod_prof, setProf] = useState("");
  const [ano, setAno] = useState("");
  const [horario, setHorario] = useState("");

  return (
    <>
      <PlanoDeFundo>
        <TextInput
          value={cod_disc}
          placeholder="Digite o código da disciplina!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setDisc(text) }}
        />

        <TextInput
          value={cod_prof}
          placeholder="Digite o código do professor!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setProf(text) }}
        />

        <TextInput
          value={ano}
          placeholder="Digite o ano!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setAno(text) }}
        />
        
        <TextInput
          value={horario}
          placeholder="Digite o horário!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setHorario(text) }}
        />

        <AdicionaTurma cod_disc={cod_disc} cod_prof={cod_prof} ano={ano} horario={horario}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Turmas Cadastrados:
          </Text>
        </View>
        <ConsultaTurma />
      </PlanoDeFundo>

    </>

  );
}