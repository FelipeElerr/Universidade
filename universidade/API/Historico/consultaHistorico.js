import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { collection, getDocs} from 'firebase/firestore'

import db from '../../config'

export default function ConsultaHistorico() {
  const colecaoRef = collection(db,'Historico');

  const [vetor, setVetor] = useState([]);

  const renderiza = ({item})=>{
    return(
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, color:'black', padding:3}}> {item.matricula} </Text>
        {/* <Text style={{flex:1, color:'black', padding:3}}> {item.cod_turma} </Text>
        <Text style={{flex:1, color:'black', padding:3}}> {item.frequencia} </Text>
        <Text style={{flex:1, color:'black', padding:3}}> {item.nota} </Text> */}
      </View>
    );
  }

  const separador = ()=>{
    return( 
        <View style={{height:1, backgroundColor:'black', width:'100%'}}></View>
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
        const dado = {id:snapshot.docs[i].id, matricula:snapshot.docs[i].data().matricula}
        vetor.push( dado )
      }

      
      const vetor2 = vetor.slice()

      setVetor(vetor2)

    }catch(erro) {
      console.log(erro.message)
    }

  }

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