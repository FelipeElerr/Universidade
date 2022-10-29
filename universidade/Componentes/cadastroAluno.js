import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'

import ConsultaAluno from '../API/Aluno/consultaAluno'
import AdicionaAluno from '../API/Aluno/adicionaAluno'

export default function App(props) {

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [url, setUrl] = useState("");

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

        <TextInput
          value={url}
          placeholder="Adicione o endereço de uma imagem!"
          style={{ borderWidth: 2, borderColor: "red" }}
          onChangeText={(text) => { setUrl(text) }}
        />

        <AdicionaAluno nome={nome} cidade={cidade} endereco={endereco} url={url}/>
        <View>
          <Text style={{fontSize:20, marginBottom:20}}>
            Alunos Cadastrados:
          </Text>
        </View>
        <ConsultaAluno />
      </View>

    </>

  );
}