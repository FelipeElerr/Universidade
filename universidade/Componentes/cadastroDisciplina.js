import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaDisciplina from '../API/Disciplina/consultaDisciplina'
import AdicionaDisciplina from '../API/Disciplina/adicionaDisciplina'

import PlanoDeFundo from './Configuracoes/planoDeFundo'

export default function App(props) {

  const [nome, setNome] = useState("");
  const [carga, setCarga] = useState("");

  return (
    <>
      <PlanoDeFundo>
        <TextInput
          value={nome}
          placeholder="Digite o nome da disciplina!"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setNome(text) }}
        />

        <TextInput
          value={carga}
          placeholder="Digite a carga horária"
          style={{ borderWidth: 1, borderColor: "black" }}
          onChangeText={(text) => { setCarga(text) }}
        />

        <AdicionaDisciplina nome_disc={nome} carga_hor={carga}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Disciplinas Cadastradas:
          </Text>
        </View>
        <ConsultaDisciplina />
      </PlanoDeFundo>
      
    </>
  );
}