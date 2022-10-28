import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase} from 'react-native'

import ConsultaAluno from '../API/Aluno/consultaAluno'

export default function App(props){

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // cria um vetor vazio
  const [vetor, setVetor] = useState([]);

  const renderiza = ({item})=>{
    return(
      <View style={{flexDirection:'row', backgroundColor:'red'}}>
        <Text style={{flex:1, color:'white'}}> {item.id} </Text> 
        <Text style={{flex:1, color:'white'}}> {item.nome} </Text>
        <Text style={{flex:1, color:'white', justifyContent:'flex-end'}}> {item.cidade} </Text>
      </View>
    );
  }

  const separador = ()=>{
    return( 
        <View style={{height:3, backgroundColor:'black', width:'100%'}}></View>
     );
  }

  const cabecalho = ()=>{
    return( 
      <View style={{height:20, backgroundColor:'black', width:'100%', marginTop:20}}>
            <Text style={{color:'white', textAlign:'center'}}>Dados que foram cadastrados</Text>
        </View>
     );
  }

  const rodape = ()=>{
    return( 
        <View style={{height:10, backgroundColor:'black', width:'100%'}}>
        </View>
     );
  }

  return(
    <View>

      <View style={{flex:1}}>
        <TextInput
         value={nome}
         placeholder="Digite seu nome!" 
         style={{borderWidth:2, borderColor:"red"}}
         onChangeText={(text) => {setNome(text)}}
        />

      <TextInput
         value={endereco}
         placeholder="Digite seu endereço!" 
         style={{borderWidth:2, borderColor:"red"}}
         onChangeText={(text) => {setEndereco(text)}}
        />

        <TextInput
         value={email}
         placeholder="Digite seu email!" 
         style={{borderWidth:2, borderColor:"red"}}
         onChangeText={(text) => {setEmail(text)}}
        />

        <TextInput
         value={telefone}
         placeholder="Digite seu telefone!" 
         style={{borderWidth:2, borderColor:"red", marginBottom:20}}
         onChangeText={(text) => {setTelefone(text)}}
        />

        <Button 
          title="Cadastrar"
          color='#bd0000'
          onPress={
            ()=>{
              const auxVex = {id:vetor.length+1,nome: nome, cidade: cidade}

              // adiciona os dados no vetor
              vetor.push(auxVex)

              // cria uma cópia do vetor para que o flatlista entenda que houve uma alteracao no vetor inicial
              //const copiaVetor = vetor.slice()

              // outra maneira de cria uma cópia
              const copiaVetor = [...vetor]

              // salva a copia novamente dentro da variavel vetor
              setVetor(copiaVetor);

              //setVetor([...vetor,auxVex]);
              console.log(vetor)
            }
          }
        />

      
    </View>
          <ConsultaAluno/>
    </View>
  );
}