import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    onPress: () => void;
    titulo: string;
    posicion: 'izq' | 'der';
    onLongPress?: () => void
}

export const BotonFlotante = ({onPress, titulo, posicion, onLongPress}: Props) => {
    
    return (
        <TouchableOpacity style={posicion == 'izq' ? ({...styles.posicionBoton, left: 50}) : ({...styles.posicionBoton, right: 50})} onPress={onPress} onLongPress={onLongPress}>
            <View style={styles.vistaButtom}>
                <Text style={styles.tituloButton}>{titulo}</Text>
            </View>
        </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    posicionBoton: {
        position: 'absolute',
        bottom: 50,
    },
    tituloButton: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    vistaButtom: {
        justifyContent: 'center',
        backgroundColor: '#38F',
        borderRadius: 100,
        height: 55,
        width: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})