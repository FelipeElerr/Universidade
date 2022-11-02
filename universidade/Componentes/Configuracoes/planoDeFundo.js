import React, { useContext } from 'react';
import { ImageBackground, View } from 'react-native';

import { useTheme } from './configuracoes'

export default function PlanoDeFundo({children}){

    const {plano} = useTheme()

    return(
            <ImageBackground style={{flex:1, backgroundColor:'#368986'}} source={plano} resizeMode='cover'>
                {children} 
            </ImageBackground>
    )
}