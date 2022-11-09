import React from 'react'
import { View, Text } from 'react-native'
import VisualizaAlunosBanco from '../../../API/VisualizaTurma/visualizaAlunosBanco'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function VizualizaAlunos({route}){
    return(
        
        <View style={{ marginLeft: '300', marginRight: '300' }}>
            <VisualizaAlunosBanco disciplina={route.params.paramKey} navigation={route.params.navigation} />
        </View>
        
    )
}