import React from 'react'
import { Text, View } from 'react-native'
import VizualizaTurmaBanco from '../../API/VisualizaTurma/visualizaTurmaBanco'

export default function VisualizarTurmas(){
    return(
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
            </View>
            <VizualizaTurmaBanco/>
        </View>
    )
}