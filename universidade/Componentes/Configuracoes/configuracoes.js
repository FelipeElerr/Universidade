import React, { createContext, useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, Alert, onPress, Image } from 'react-native';

//import AsyncStorage from '@react-native-async-storage/async-storage';

//const imagem1 = "https://img.freepik.com/fotos-gratis/figura-triangular-geometrica-legal-em-uma-luz-de-laser-neon-otima-para-fundos-e-papeis-de-parede_181624-9840.jpg";
import imagem1 from "./img/imgback1.png"
import imagem2 from "./img/imgback2.png";
import imagem3 from "./img/imgback3.png";
import PlanoDeFundo from './planoDeFundo';

const BackgroundContext = createContext({});

export const BackgroundProvider = ({ children }) => {

    const [plano, setPlano] = useState(imagem1);
    
    const storeBackground = async (plano) => {
        setPlano(plano)
    }
    
    const getData = async () => {
    }
    
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <BackgroundContext.Provider value={{ plano, storeBackground }}>
          {children}
        </BackgroundContext.Provider>
      )
    }
    
export const useTheme = () => {
      return useContext(BackgroundContext)
    }


function Configuracoes(){

    const {storeBackground, plano} = useTheme()

    const alteraPlano = (opcao)=> {
        if(opcao==1){
            storeBackground(imagem1)
        }
        else if(opcao==2){
            storeBackground(imagem2)
        }
        else {
            storeBackground(imagem3) 
        }
    }

    return(
            <PlanoDeFundo>
                <Text>Clique em um dos botões abaixo para alterar o plano de fundo</Text>
        
                    <View style={{marginTop:20}}>
                        <Button
                            color='#0d1c82'
                            title="NOITE"
                            onPress={()=>{alteraPlano(1)}}        
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <Button
                            color='#ffa198'
                            title="DIA"
                            onPress={()=>{alteraPlano(2)}}
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <Button
                            color='#1a39e5'
                            title="ESTELAR"
                            onPress={()=>{alteraPlano(3)}}
                        />
                    </View>
            </PlanoDeFundo>
    );
}

export default Configuracoes;