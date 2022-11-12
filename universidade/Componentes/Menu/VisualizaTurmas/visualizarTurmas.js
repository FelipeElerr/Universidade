import React from 'react'
import { Text, View, Button } from 'react-native'
import VisualizaTurmaBanco from '../../../API/VisualizaTurma/visualizaTurmaBanco'

import PlanoDeFundo from '../../Configuracoes/planoDeFundo'

export default function VisualizarTurmas(props){
    return(
        <PlanoDeFundo>
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
                <VisualizaTurmaBanco navigation = {props.navigation}/>
            </View>
        </PlanoDeFundo>
    )
}