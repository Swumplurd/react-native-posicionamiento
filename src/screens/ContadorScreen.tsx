import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BotonFlotante } from '../components/BotonFlotante'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0)

    return (
        <View style={{flex: 1, backgroundColor: '#28425B', justifyContent: 'center'}}>
            <Text style={{fontSize: 40, textAlign: 'center', color: 'white'}}>Contador: {contador}</Text>

            {/* <Button title="+1" onPress={() => setContador(contador + 1)}/>
            <Button title="-1" onPress={() => setContador(contador - 1)}/> */}

            <BotonFlotante titulo="+1" posicion="der" onPress={() => setContador(contador + 1)}/>
            <BotonFlotante titulo="-1" posicion="izq" onPress={() => setContador(contador - 1)} onLongPress={() => setContador(0)}/>
        </View>
    )
}
