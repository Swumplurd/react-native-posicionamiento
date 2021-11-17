import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlexDireccion } from './FlexDireccion'

export const JustifyContent = () => {
    return (
        <View style={styles.globalContainer}>
            <View style={styles.contenedor1}>
                <View style={styles.caja1}/>
                <View style={styles.caja2}/>
                <View style={styles.caja3}/>
            </View>
            <View style={styles.contenedor2}>
                <View style={styles.caja1}/>
                <View style={styles.caja2}/>
                <View style={styles.caja3}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1
    },
    contenedor1: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    contenedor2: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    caja1: {
        width: 30,
        height: 30,
        backgroundColor: 'red'
    },
    caja2: {
        width: 30,
        height: 30,
        backgroundColor: 'orange'
    },
    caja3: {
        width: 30,
        height: 30,
        backgroundColor: 'yellow'
    },
})