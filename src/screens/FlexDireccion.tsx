import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDireccion = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.caja, {backgroundColor: 'powderblue'}]}/>
            <View style={[styles.caja, {backgroundColor: 'skyblue'}]}/>
            <View style={[styles.caja, {backgroundColor: 'steelblue'}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'row-reverse'
    },
    caja: {
        width: 50,
        height: 50
    }
})