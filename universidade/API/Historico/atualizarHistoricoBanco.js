import React from 'react';
import { Button, View } from 'react-native';

import { deleteDoc, getDoc, doc, updateDoc } from 'firebase/firestore'

import db from '../../config'

export default function AtualizarHistoricoBanco(props) {

    const AtualizandoDados = () => {

        updateDoc(doc(db, "Histórico", props.cod_historico), {
            matricula: props.matricula,
            cod_turma: props.cod_turma,
            frequencia: props.frequencia,
            nota: props.nota,
        }).then(() => {
            console.log('Dado salvo com sucesso!');

        }).catch((error) => {
            // houve algum erro...
            console.log(error);
        });
    }

    return (
        <>
            <View>
                <Button
                    title="Atualizar"
                    color='#e79a32'
                    onPress={
                        () => {
                            AtualizandoDados()
                        }
                    }
                />
            </View>

        </>


    );

}