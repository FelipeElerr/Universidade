import React, { useEffect, useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

import ConsultaHistorico from '../../../API/Historico/consultaHistorico'
import VisualizaHistoricoFiltradoBanco from '../../../API/VisualizarHistoricoFiltrado/visualizaHistoricoFiltradoBanco';

import PlanoDeFundo from '../../Configuracoes/planoDeFundo';

export default function VisualizarHistorico(props) {

    const [turma, setTurma] = useState("");

    return (
        <PlanoDeFundo>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                <TextInput
                    value={turma}
                    placeholder="Digite um código de turma para filtrar!"
                    style={{ borderWidth: 1, borderColor: "black" }}
                    onChangeText={(text) => { setTurma(text) }}
                />
                <Button
                    color='#005c81'
                    title='Filtrar'
                    onPress={() => {
                        props.navigation.navigate('VisualizaHistoricoFiltradoBanco', {
                            turma: turma
                        })
                    }
                    }
                />
   
                <View style={{ flex: 1 }}>
                    <ConsultaHistorico />
                </View>


            </View>
        </PlanoDeFundo>


    )
}