
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Button } from 'react-native';

import {getFirestore, collection, getDocs, setDoc, doc, deleteDoc, getDoc, addDoc} from 'firebase/firestore'

import db from '../../config'

export default function AdicionaAluno(props) {
  const colecaoRef = collection(db,'Professor');
  const adicionandoDados = ()=>{
    addDoc(collection(db, "Professor"), {
        nome: props.nome,
        endereco: props.endereco,
        cidade:props.cidade
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