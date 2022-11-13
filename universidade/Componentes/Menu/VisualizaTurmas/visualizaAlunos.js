import React from 'react';
import { View, ActivityIndicator, Button, Text} from 'react-native';
import VisualizaAlunosBanco from '../../../API/VisualizaTurma/visualizaAlunosBanco';
import {useState} from "react";

import PlanoDeFundo from '../../Configuracoes/planoDeFundo'

export default function VisualizaAlunos({ route }) {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 10000)

    if (loading == true) {
        return (
            <View>
                <PlanoDeFundo>
                <ActivityIndicator size="large" color="blue" animating={loading} />
                </PlanoDeFundo>
                
            </View>
        )
    }

    if (loading == false) {
        try {
            return (
                <PlanoDeFundo>
                    <View style={{ marginLeft: '300', marginRight: '300' }}>
                    <VisualizaAlunosBanco disciplina={route.params.paramKey} navigation={route.params.navigation} />
                </View>
                </PlanoDeFundo>
                
            )
        } catch (error) {
            return (
                <PlanoDeFundo>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 15 }}>
                            Erro ao carregar informações!
                        </Text>

                        <Button title='Tente novamente' onPress={() => { setLoading(true) }} />
                    </View>
                </PlanoDeFundo>
            )
        }

    }
}