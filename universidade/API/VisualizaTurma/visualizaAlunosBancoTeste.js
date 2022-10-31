import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { collection, getDoc,getDocs, query, where} from 'firebase/firestore'


import db from '../../config'

export default function VizualizaTurmaBanco(props) {
    const [vetor, setVetor] = useState([]);
    const busca = query(collection(db, "Histórico"), where('cod_turma', '==', '2c02mKP4ZwyFiFbVsK9o'));
    console.log('Busca: ', busca)

    useEffect(
        ()=>{
          retornaDados()
        },[]
      );

    const retornaDados = async ()=>{

        try{
          const snapshot = await getDocs(busca)
    
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

    console.log('Vetor', vetor);
    }



