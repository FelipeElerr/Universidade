
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc, addDoc} from 'firebase/firestore'

import db from '../../config'

export default function AdicionaHistorico(props) {
  const colecaoRef = collection(db,'Histórico');
  const adicionandoDados = ()=>{
    addDoc(collection(db, "Histórico"), {
        matricula: props.matricula,
        cod_turma: props.cod_turma,
        frequencia:props.frequencia,
        nota:props.nota
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
          color='#368986'
          onPress={
            ()=>{
              adicionandoDados()
            }
          }
        />
  )
}