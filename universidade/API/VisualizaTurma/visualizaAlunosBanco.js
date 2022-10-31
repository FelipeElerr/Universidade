import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'

import db from '../../config'

export default function ConsultaHistorico(props) {
    const colecaoHistorico = collection(db, 'Histórico');
    const colecaoAluno = collection(db, 'Aluno');

    const [vetorHistorico, setVetorHistorico] = useState([]);
    const [matriculas, setMatriculas] = useState([]);
    const [vetorAluno, setVetorAluno] = useState([]);
    const [dadosAlunosTurma, setDadosAlunosTurma] = useState([]);

    const renderiza = ({ item }) => {
        const tamanho = Dimensions.get('window').height / matriculas.length
        console.log('Tamanho: ', tamanho)

        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft:'500' }}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                    source={{ uri: item.foto }}
                />
                <Text > {item.nome}</Text>
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
            retornaDadosHistorico()
            retornaDadosAlunos()
        }, []
    );

    //get collection data
    const retornaDadosHistorico = async () => {

        try {
            const snapshot = await getDocs(colecaoHistorico)

            for (let i = 0; i < snapshot.docs.length; i++) {
                const dado = { id: snapshot.docs[i].id, matricula: snapshot.docs[i].data().matricula, frequencia: snapshot.docs[i].data().frequencia, nota: snapshot.docs[i].data().nota, cod_turma: snapshot.docs[i].data().cod_turma }
                vetorHistorico.push(dado)
            }


            const vetor2 = vetorHistorico.slice()

            setVetorHistorico(vetor2)

            console.log('Vetor Historico', vetorHistorico);

            for (let i = 0; i < vetorHistorico.length; i++) {
                if (vetorHistorico[i].cod_turma == props.disciplina) {
                    console.log('AchouTurma')
                    matriculas.push(vetorHistorico[i].matricula)
                }
            }

            const vetor3 = matriculas.slice()
            setMatriculas(vetor3)

            console.log('Matriculas', matriculas)

        } catch (erro) {
            console.log(erro.message)
        }

    }

    const retornaDadosAlunos = async () => {

        try {
            const snapshot = await getDocs(colecaoAluno)

            for (let i = 0; i < snapshot.docs.length; i++) {
                const dado = { id: snapshot.docs[i].id, nome: snapshot.docs[i].data().nome, cidade: snapshot.docs[i].data().cidade, endereco: snapshot.docs[i].data().endereco, foto: snapshot.docs[i].data().foto }
                vetorAluno.push(dado)
            }


            const vetor2 = vetorAluno.slice()

            setVetorAluno(vetor2)
            matriculas.forEach(matricula => {
                for (let i = 0; i < vetorAluno.length; i++) {
                    if (vetorAluno[i].id == matricula) {
                        console.log('entrouMatricula')
                        dadosAlunosTurma.push({ id: vetorAluno[i].id, nome: vetorAluno[i].nome, cidade: vetorAluno[i].cidade, endereco: vetorAluno[i].endereco, foto: vetorAluno[i].foto })
                    }
                }
            })

            const vetor4 = dadosAlunosTurma.slice()
            setDadosAlunosTurma(vetor4)

            console.log('Dados aluno turma:', dadosAlunosTurma);


        } catch (erro) {
            console.log(erro.message)
        }

    }



    return (
        <View style={{flex:1}}>
            <FlatList
                data={dadosAlunosTurma}
                keyExtractor={item => item.id}
                renderItem={renderiza}
                ItemSeparatorComponent={separador}
                ListHeaderComponent={separador}
                ListFooterComponent={separador}
            />
        </View>
    );
}