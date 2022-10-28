import * as React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Pilha = createNativeStackNavigator();

function App(){

    const estilo1 = {
        direction:'row',
        views: [
            {flex:2, backgroundColor:'red'},
            {flex:1, backgroundColor:'green'},
            {flex:3, backgroundColor:'yellow'},
            {flex:2, backgroundColor:'blue'},
            {flex:1, backgroundColor:'magenta'}
        ]
    }

    const estilo2 = {
        direction:'column',
        views: [
            {flex:3, backgroundColor:'#f5e90b'},
            {flex:2, backgroundColor:'#10e3cb'},
            {flex:1, backgroundColor:'#57e310'},
            {flex:1, backgroundColor:'#ff00ef'},
            {flex:3, backgroundColor:'#ffd600'}
        ]
    }

    const [aparencia, setAparencia] = React.useState(estilo1)

    const alteraAparencia = (opcao)=>{
        if(opcao==1){
            setAparencia(estilo1);
        }
        else{
            setAparencia(estilo2);
        }
    }

    return(
        <View style={{flex:1}}>
            <Button 
                title='Row' 
                onPress={()=>alteraAparencia(1)}
            />

            <Button 
                title='Column' 
                onPress={()=>alteraAparencia(2)}
            />

            <View style={{flex:1, marginTop:20, flexDirection:aparencia.direction}}>
                <View style={{flex:aparencia.views[0].flex, backgroundColor:aparencia.views[0].backgroundColor}}></View>
                <View style={{flex:aparencia.views[1].flex, backgroundColor:aparencia.views[1].backgroundColor}}></View>
                <View style={{flex:aparencia.views[2].flex, backgroundColor:aparencia.views[2].backgroundColor}}></View>
                <View style={{flex:aparencia.views[3].flex, backgroundColor:aparencia.views[3].backgroundColor}}></View>
                <View style={{flex:aparencia.views[4].flex, backgroundColor:aparencia.views[4].backgroundColor}}></View>
            </View>
        </View>
    );
}

export default App;