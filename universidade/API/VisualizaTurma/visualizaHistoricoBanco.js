import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'

import db from '../../config'

export default function VisualizaHistoricoBanco({ route }) {
    const colecaoHistorico = collection(db, 'Histórico');
    const colecaoAluno = collection(db, 'Aluno');

    const [vetorHistorico, setVetorHistorico] = useState([]);
    const [dadosTela, setDadosTela] = useState([]);
    const [vetorAluno, setVetorAluno] = useState([]);
    useEffect(
        () => {
            retornaDadosHistoricoAluno()
        }, []
    );

    //get collection data
    const retornaDadosHistoricoAluno = async () => {

        try {
            const snapshot = await getDocs(colecaoHistorico)

            for (let i = 0; i < snapshot.docs.length; i++) {
                const dadoHistorico = { id: snapshot.docs[i].id, matricula: snapshot.docs[i].data().matricula, frequencia: snapshot.docs[i].data().frequencia, nota: snapshot.docs[i].data().nota, cod_turma: snapshot.docs[i].data().cod_turma }
                vetorHistorico.push(dadoHistorico)
            }


            const vetor2 = vetorHistorico.slice()

            setVetorHistorico(vetor2)

            try {
                const snapshot = await getDocs(colecaoAluno)

                for (let i = 0; i < snapshot.docs.length; i++) {
                    const dadoAluno = { id: snapshot.docs[i].id, nome: snapshot.docs[i].data().nome, cidade: snapshot.docs[i].data().cidade, endereco: snapshot.docs[i].data().endereco }
                    vetorAluno.push(dadoAluno)
                }


                const vetor3 = vetorAluno.slice()

                setVetorAluno(vetor3)
                for (let i = 0; i < vetorHistorico.length; i++) {
                    console.log('passou')
                    if (vetorHistorico[i].matricula == route.params.matricula) {
                        console.log('entrouIF1')
                        vetorAluno.forEach(item => {
                            if (item.id == route.params.matricula) {
                                console.log('entrouIF2')
                                console.log('Nome: ', vetorAluno)
                                console.log('Nota: ', vetorHistorico)
                                dadosTela.push({ id:item.id, nome: item.nome, frequencia: vetorHistorico[i].frequencia, nota: vetorHistorico[i].nota })
                            }
                        })
                    }
                }

                const vetor4 = dadosTela.slice()
                setDadosTela(vetor4)
                console.log('Dados tela:', dadosTela);

            } catch (erro) {
                console.log(erro.message)
            }

        }catch (erro) {
            console.log(erro.message)
        }

        const separador = () => {
            return (
                <View style={{ height: 1, backgroundColor: 'black', width: '100%' }}></View>
            );
        }

        const renderiza = ({ item }) => {
            const tamanho = Dimensions.get('window').height / matriculas.length
            return (
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <Text>{item.nome}</Text>
                    <Text>{item.frequencia}</Text>
                    <Text>{item.nota}</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={dadosTela}
                    keyExtractor={item => item.id}
                    renderItem={renderiza}
                    ItemSeparatorComponent={separador}
                    ListHeaderComponent={separador}
                    ListFooterComponent={separador}
                /> 
            </View>
        );
    }
}