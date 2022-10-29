import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaProfessor from '../API/Professor/consultaProfessor'
import AdicionaProfessor from '../API/Professor/adicionaProfessor'

export default function App(props) {

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");

  return (
    <>
      <View style={{ flex: 1 }}>
        <TextInput
          value={nome}
          placeholder="Digite seu nome!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setNome(text) }}
        />

        <TextInput
          value={endereco}
          placeholder="Digite seu endereço!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setEndereco(text) }}
        />

        <TextInput
          value={cidade}
          placeholder="Digite sua cidade!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setCidade(text) }}
        />

        <AdicionaProfessor nome={nome} cidade={cidade} endereco={endereco}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Professores Cadastrados:
          </Text>
        </View>
        <ConsultaProfessor />
      </View>

    </>

  );
}