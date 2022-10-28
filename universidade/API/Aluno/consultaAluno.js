import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase} from 'react-native'
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore'

import db from '../../config'

export default function ConsultaAluno() {
  const colecaoRef = collection(db,'Aluno');

  const [vetor, setVetor] = useState([]);

  const renderiza = ({item})=>{
    return(
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:2, color:'black'}}> {item.nome} </Text> 
        <Text style={{flex:1, color:'black'}}> {item.cidade} </Text>
        <Text style={{flex:1, color:'black', justifyContent:'flex-end'}}> {item.endereco} </Text>
      </View>
    );
  }

  const separador = ()=>{
    return( 
        <View style={{height:3, backgroundColor:'black', width:'100%'}}></View>
     );
  }

  useEffect(
    ()=>{
      retornaDados()
    },[]
  );

  //get collection data
  const retornaDados = async ()=>{

    try{
      const snapshot = await getDocs(colecaoRef)

      for(let i=0;i<snapshot.docs.length;i++){
        console.log('Dados[', i, ']: ', snapshot.docs[i].data())

        const dado = {id:snapshot.docs[i].id, item:snapshot.docs[i].data().Item, qtd: snapshot.docs[i].data().Quantidade}

        vetor.push( dado )
      }

      
      const vetor2 = vetor.slice()

      setVetor(vetor2)

    }catch(erro) {
      console.log(erro.message)
    }

  }
  console.log('vetor: ', vetor);
  return(
    <View>
      <FlatList 
          data ={vetor} 
          keyExtractor={item => item.id}
          renderItem={renderiza}
          ItemSeparatorComponent={separador}
          ListHeaderComponent={separador}
          ListFooterComponent={separador}
      />
    </View>
  );
}