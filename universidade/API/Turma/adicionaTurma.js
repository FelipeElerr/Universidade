
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc, addDoc} from 'firebase/firestore'

import db from '../../config'

export default function AdicionaAluno(props) {
  const colecaoRef = collection(db,'Turma');
  const adicionandoDados = ()=>{
    addDoc(collection(db, "Turma"), {
        cod_disc: props.cod_disc,
        cod_prof: props.cod_prof,
        ano:props.ano,
        horario:props.horario
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