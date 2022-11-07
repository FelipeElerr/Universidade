import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, Button, DrawerLayoutAndroidBase, TurboModuleRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ApagarHistoricoBanco from '../../API/Historico/apagarHistoricoBanco';
import PlanoDeFundo from '../Configuracoes/planoDeFundo';

export default function DeletarHistorico() {

    const [cod_historico, setHistorico] = useState("");

    return (
        <>
            <PlanoDeFundo>
                <View>
                    <TextInput
                        value={cod_historico}
                        placeholder="Digite o código do histórico a ser deletado!"
                        style={{ borderWidth: 1, borderColor: "black" }}
                        onChangeText={(text) => { setHistorico(text) }}
                    />
                </View>
                <ApagarHistoricoBanco cod_historico={cod_historico}  />
            </PlanoDeFundo>
            
        </>
        
    )
}