import React from 'react';
import { Button } from 'react-native';

import { deleteDoc, getDoc, doc } from 'firebase/firestore'

import db from '../../config'

export default function ApagarHistoricoBanco(props) {
  
  const deletandoDados = () => {
    const docRef = doc(db, "Histórico", props.cod_historico);
    getDoc(docRef)
      .then((snap) => {
        if (!snap.exists()) {
          console.log("Documento não encontrado"); // document missing
        }
        else {
          deleteDoc(docRef).then(
            console.log("Documento deletado")
          );
        }
      });
  }

  return (
    <Button
      title="Deletar"
      color='#368986'
      onPress={
        () => {
          deletandoDados()
        }
      }
    />
  );
}
