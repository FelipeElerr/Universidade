import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import VisualizaAlunosBanco from '../../../API/VisualizaTurma/visualizaAlunosBanco'

import PlanoDeFundo from '../../Configuracoes/planoDeFundo'

export default function VisualizaAlunos({route}){
    return(
        <PlanoDeFundo>
            <View style={{marginLeft:'300', marginRight:'300'}}>
            
                <VisualizaAlunosBanco disciplina={route.params.paramKey} navigation={route.params.navigation}/>
               
                
            </View>
        </PlanoDeFundo>
    )
}