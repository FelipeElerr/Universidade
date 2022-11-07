import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'

import db from '../../config'
import PlanoDeFundo from '../../Componentes/Configuracoes/planoDeFundo'

export default function VisualizaHistoricoFiltradoBanco({ route }) {
    const colecaoHistorico = collection(db, 'Histórico');
    const colecaoAluno = collection(db, 'Aluno');
    const [vetorHistorico, setVetorHistorico] = useState([]);
    const [dadosTela, setDadosTela] = useState([]);
    const [vetorAluno, setVetorAluno] = useState([]);
    const [list, setList] = useState([]);
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
                    const dadoAluno = { id: snapshot.docs[i].id, nome: snapshot.docs[i].data().nome, cidade: snapshot.docs[i].data().cidade, endereco: snapshot.docs[i].data().endereco, foto: snapshot.docs[i].data().foto }
                    vetorAluno.push(dadoAluno)
                }


                const vetor3 = vetorAluno.slice()

                setVetorAluno(vetor3)
                for (let i = 0; i < vetorHistorico.length; i++) {
                    console.log('passou')
                    console.log('vetorHistorico: ', vetorHistorico[i].cod_turma);
                    console.log('Parametro matricula: ', route.params.turma);
                    if (vetorHistorico[i].cod_turma == route.params.turma) {
                        console.log('entrouIF1')
                        vetorAluno.forEach(item => {
                            if (item.id == vetorHistorico[i].matricula) {
                                console.log('entrouIF2')
                                console.log('Nome: ', vetorAluno)
                                console.log('Nota: ', vetorHistorico)
                                dadosTela.push({ id: item.id, nome: item.nome, nota: vetorHistorico[i].nota })
                            }
                        })
                    }
                }

                const vetor4 = dadosTela.slice()
                setDadosTela(vetor4)

                let newList = [...dadosTela];
                newList.sort((a, b) => {
                    if (a.nome > b.nome) {
                        return 1;
                    } else {
                        if (b.nome > a.nome) {
                            return -1;
                        } else {
                            if (a.nota < b.nota) {
                                return 1;
                            } else {
                                if (b.nota < a.nota) {
                                    return -1;
                                } else {
                                    return 0;
                                }
                            }
                        }
                    }
                });
                setList(newList);
                console.log('Dados tela:', dadosTela);

            } catch (erro) {
                console.log(erro.message)
            }

        } catch (erro) {
            console.log(erro.message)
        }

    }

    const separador = () => {
        return (
            <View style={{ height: 1, backgroundColor: 'black', width: '100%' }}></View>
        );
    }

    const renderiza = ({ item }) => {

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text><spam style={{ fontWeight: "bold" }}>Nome: </spam>{item.nome} - <spam style={{ fontWeight: "bold" }}>Nota: </spam> {item.nota}</Text>
            </View>
        );
    }

    return (
        <PlanoDeFundo>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Image
                    style={{ width: 300, height: 300, resizeMode: 'contain' }}
                    source={{ uri: () => { retornaFoto() } }}
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
                    <FlatList
                        data={list}
                        keyExtractor={item => item.id}
                        renderItem={renderiza}
                        ItemSeparatorComponent={separador}
                        ListHeaderComponent={separador}
                        ListFooterComponent={separador}
                    />
                </View>
            </View>
        </PlanoDeFundo>

    );
}