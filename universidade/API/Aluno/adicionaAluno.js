
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc, addDoc} from 'firebase/firestore'

import db from '../../config'

export default function AdicionaAluno(props) {
  const colecaoRef = collection(db,'Aluno');
  const adicionandoDados = ()=>{
    addDoc(collection(db, "Aluno"), {
        nome: props.nome,
        endereco: props.endereco,
        cidade:props.cidade,
        foto:props.url
      }).then(()=>{
            console.log('Dado submetido')
        })
        .catch((error)=>{
          console.log(error)
        });
  }
  return(
    <Button 
          title="Cadastrar"
          color='#bd0000'
          onPress={
            ()=>{
              adicionandoDados()
            }
          }
        />
  )
}