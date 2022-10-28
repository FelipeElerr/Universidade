import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default ()=>{
    return(
        <View>
            <Text style={estilos.textoCorString}>
                O importante é não parar de questionar.
            </Text>

            <Text style={estilos.textoCorCodigo}>
                As pessoas podem te tirar tudo, menos o seu conhecimento.
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    textoCorString:{
        color: 'red',
        fontStyle: 'italic',
        fontSize: 25        
    },
    textoCorCodigo:{
        color: '#900C3F',
        fontStyle: 'italic',
        fontSize: 25,
        marginTop: 30        
    },    
})