import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'

import estilos from '../estilos/estilos.js'

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