import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'


import db from '../../config'

export default function VisualizaTurmaBanco(props) {
  const colecaoRef = collection(db, 'Turma');

  const [vetor, setVetor] = useState([]);


  const adicionandoDados = () => {

  }

  const renderiza = ({ item }) => {
    return (
      <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{flex:1}}>
          <Text style={{ flex: 1, color: 'black', padding: 3 }}>
            <span style={{ fontWeight: "bold" }}>Código da turma: </span>{item.id}  
          </Text>
          <Text style={{ flex: 1, color: 'black', padding: 3 }}>
          <span style={{ fontWeight: "bold" }}>Código da disciplina: </span> {item.cod_disc}
          </Text>
          <Text style={{ flex: 1, color: 'black', padding: 3 }}>
          <span style={{ fontWeight: "bold" }}>Código do Professor: </span> {item.cod_prof}
          </Text>
        </View>

        <Button
          color='#005c81'
          title="Ver alunos"
          onPress={() =>
            props.navigation.navigate('VisualizaAlunos', {
              paramKey: item.id,
              navigation: props.navigation
            })
          }
        />
      </View>
    );
  }

  const separador = () => {
    return (
      <View style={{ height: 1, backgroundColor: 'black', width: '100%' }}></View>
    );
  }

  useEffect(
    () => {
      retornaDados()
    }, []
  );

  //get collection data
  const retornaDados = async () => {

    try {
      const snapshot = await getDocs(colecaoRef)

      for (let i = 0; i < snapshot.docs.length; i++) {
        const dado = { id: snapshot.docs[i].id, cod_disc: snapshot.docs[i].data().cod_disc, cod_prof: snapshot.docs[i].data().cod_prof }
        vetor.push(dado)
      }


      const vetor2 = vetor.slice()

      setVetor(vetor2)

    } catch (erro) {
      console.log(erro.message)
    }

  }

  return (
    <View style={{flex:1}}>
      <FlatList
        data={vetor}
        keyExtractor={item => item.id}
        renderItem={renderiza}
        ItemSeparatorComponent={separador}
        ListHeaderComponent={separador}
        ListFooterComponent={separador}
      />
    </View>
  );
}



