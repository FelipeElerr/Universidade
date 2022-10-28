import * as React from 'react'
import {Text, View, StyleSheet, Button, ImageBackground, Image} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import figura1 from "../img/background01.jpg";
import figura2 from "../img/background02.jpg";

const Pilha = createNativeStackNavigator();

function TelaTestaFlexbox(props){

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

    React.useEffect(
        ()=>{
            alteraAparencia(props.route.params.direction);
        },[props.route.params.direction])

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
                title="Ir para tela Plano de Fundo"
                onPress={()=>props.navigation.navigate('Home')} 
            />

            <Button
                title="Voltar"
                onPress={()=>props.navigation.goBack()} 
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

function TelaHome(props){
    return(
        <View>
            <Text>Home</Text>

            <Button 
                title='Ir para TestaFlexbox - aparência Row' 
                onPress={()=>{
                    props.navigation.navigate('TestaFlexbox', {direction:1});
                }}
            />

            <Button 
                title='Ir para TestaFlexbox - aparência column'
                onPress={()=>{
                    props.navigation.navigate('TestaFlexbox', {direction:2});
                }}
            />

            <Button 
                title='Ir para PlanoFundo'
                onPress={()=>{
                    props.navigation.navigate('PlanoFundo');
                }}
            />

        </View>
    );
}

function TelaPlanoFundo(props){

    const [plano, setPlano] = React.useState(figura1);

    const alteraPlano = (opcao)=>{
        if(opcao==1){
            setPlano(figura1)
        }
        else{
            setPlano(figura2)
        }
    }

    return(
        <View style={{flex:1}}>
          <ImageBackground style={{flex:1}} source={plano}>
            <Text>Plano de fundo</Text>

            <Button
                title="Plano 1"
                onPress={()=>{alteraPlano(1)}} 
                style = {{color:'red'}}
            />

            <Button
                title="Plano 2"
                onPress={()=>{alteraPlano(2)}} 
                style = {{color:'purple'}}
            />

            <Button
                title="Ir para Home"
                onPress={()=>props.navigation.navigate('Home')} 
            />

            <Button
                title="Voltar"
                onPress={()=>props.navigation.goBack()} 
            />

            </ImageBackground>
        </View>
    );
}

function App(props){
    return(

        <NavigationContainer independent={true}>
            <Pilha.Navigator>
                <Pilha.Screen name='Home' component={TelaHome}/>
                <Pilha.Screen name='TestaFlexbox' component={TelaTestaFlexbox}/>
                <Pilha.Screen name='PlanoFundo' component={TelaPlanoFundo}/>
            </Pilha.Navigator>
        </NavigationContainer>
        
    )
}

export default App;