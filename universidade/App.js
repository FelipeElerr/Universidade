import React from 'react'
import {View, Text, Button} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Ex01 from './Componentes/ex1'
import Ex02 from './Componentes/ex2'
import Ex03 from './Componentes/ex3'
import Ex04 from './Componentes/ex4'
import Ex05 from './Componentes/ex5'

const Pilha = createNativeStackNavigator();

function TelaExercicios(props){
  return(
    <View>
        <Text>Clique em um dos botões abaixo para ver o exercício desejado</Text>

        <Button
                style = {{backgroundColor:'blue'}}
                title = "Ex01"
                onPress = {()=>props.navigation.navigate('Ex01')} 
        />

        <Button
                style = {{backgroundColor:'green'}}
                title = "Ex02"
                onPress = {()=>props.navigation.navigate('Ex02')} 
        />

        <Button
                style = {{backgroundColor:'blue'}}
                title = "Ex03"
                onPress = {()=>props.navigation.navigate('Ex03')} 
        />

        <Button
                style = {{backgroundColor:'green'}}
                title = "Ex04"
                onPress = {()=>props.navigation.navigate('Ex04')} 
        />


        <Button
                style = {{backgroundColor:'blue'}}
                title = "Ex05"
                onPress = {()=>props.navigation.navigate('Ex05')} 
        />


    </View>    
  );
}


export default function App(){
    return(

        <NavigationContainer independent={true}>
            <Pilha.Navigator>
                <Pilha.Screen name='TelaExercicios' component={TelaExercicios} options={{title:'Exercícios'}}/>
                <Pilha.Screen name='Ex01' component={Ex01}/>
                <Pilha.Screen name='Ex02' component={Ex02}/>
                <Pilha.Screen name='Ex03' component={Ex03}/>
                <Pilha.Screen name='Ex04' component={Ex04}/>
                <Pilha.Screen name='Ex05' component={Ex05}/>
            </Pilha.Navigator>
        </NavigationContainer>
        
    )
}


