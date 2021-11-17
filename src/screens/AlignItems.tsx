import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AlignItems = () => {
    return (
        <View style={styles.globalContainer}>
            <View style={styles.contenedor1}>
                <Text style={styles.caja1}>Caja1</Text>
                <Text style={styles.caja2}>Caja2</Text>
                <Text style={styles.caja3}>Caja3</Text>
            </View>
            <View style={styles.contenedor2}>
                <Text style={styles.caja1}>Caja1</Text>
                <Text style={styles.caja2}>Caja2</Text>
                <Text style={styles.caja3}>Caja3</Text>
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
        alignItems: 'center',
    },
    contenedor2: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
    },
    caja1: {
        padding: 5,
        fontSize: 20,
        backgroundColor: 'red'
    },
    caja2: {
        padding: 5,
        fontSize: 20,
        backgroundColor: 'orange'
    },
    caja3: {
        padding: 5,
        fontSize: 20,
        backgroundColor: 'yellow'
    },
})