import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaDisciplina from '../API/Disciplina/consultaDisciplina'
import AdicionaDisciplina from '../API/Disciplina/adicionaDisciplina'

export default function App(props) {

  const [nome, setNome] = useState("");
  const [carga, setCarga] = useState("");

  return (
    <>
      <View style={{ flex: 1 }}>
        <TextInput
          value={nome}
          placeholder="Digite o nome da disciplina!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setNome(text) }}
        />

        <TextInput
          value={carga}
          placeholder="Digite a carga horária"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setCarga(text) }}
        />

        <AdicionaDisciplina nome_disc={nome} carga_hor={carga}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Alunos Cadastrados:
          </Text>
        </View>
        <ConsultaDisciplina />
      </View>

    </>

  );
}