import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';

function Home() {

    const [dados, setDados] = useState([]);
    const [imagens, setImagens] = useState([]);
    const [erro, setErro] = useState("")

    useEffect(
        () => {
            getDados();
        }, []
    );

    const getDados = async () => {

        try {
            const resposta = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10");
            const dados = await resposta.json()
            setDados(dados);
        } catch (error) {
            // vamos guardar um texto dentro de uma variável para mostrar no app
            setErro('Ferrou! Deu um erro!')
            console.log(erro);
        }
    }
    dados.forEach(dado => {
        imagens.push(dado.image_link)
    })

    const numColunas = 4;
    const tamanho = Dimensions.get('window').width / numColunas

    return (
        <View>
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Integrantes:
                </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <Image
                        style={{ width: tamanho, height: tamanho, resizeMode: 'contain' }}
                        source={{ uri: imagens[0] }}
                    />
                    <Text> Rafael Henrique Lavagnini- 200767 </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <Image
                        style={{ width: tamanho, height: tamanho, resizeMode: 'contain' }}
                        source={{ uri: imagens[1] }}
                    />
                    <Text> Felipe Eler de Oliveira Machado - 200738</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <Image
                        style={{ width: tamanho, height: tamanho, resizeMode: 'contain' }}
                        source={{ uri: imagens[2] }}
                    />
                    <Text> Matheus Carvalho Patriarca de Paschoa - 200347</Text>
                </View>



            </View>
        </View>
    );
}

export default Home;
