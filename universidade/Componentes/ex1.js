import * as React from 'react'
import {Text, View} from 'react-native'

export default ()=>{
    return(
        <View>
            <Text style={{
                    color: 'blue',
                    fontStyle: 'italic',
                    fontSize: 25
                }}
            >
                O importante é não parar de questionar.
            </Text>

            <Text style={{
                    color: '#132abf',
                    fontStyle: 'italic',
                    fontSize: 25,
                    marginTop: 30,
                }}
            >
                As pessoas podem te tirar tudo, menos o seu conhecimento.
            </Text>
        </View>
    );
}