import React from 'react'
import { Text, View, Button } from 'react-native'
import VizualizaTurmaBanco from '../../../API/VisualizaTurma/visualizaTurmaBanco'

import PlanoDeFundo from '../../Configuracoes/planoDeFundo'

export default function VisualizarTurmas(props){
    return(
        <PlanoDeFundo>
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>
                        Código da turma
                    </Text>
                    <Text>
                        Código da disciplina
                    </Text>
                    <Text>
                        Código do professor
                    </Text>
                    <Button
                        color='white'
                        title="Cadastro de Aluno"
                    />
                </View>
                <VizualizaTurmaBanco navigation = {props.navigation}/>
            </View>
        </PlanoDeFundo>
    )
}