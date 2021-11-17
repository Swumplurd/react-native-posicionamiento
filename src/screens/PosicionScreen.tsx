import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PosicionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.caja1}/>
            <View style={styles.caja2}/>
            <View style={styles.caja3}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    caja1: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        position: 'relative',
        bottom: 0,
        left: 311
    },
    caja2: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        position: 'relative',
    },
    caja3: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 10,
        position: 'relative',
        top: -200,
        left: 0
    }
})