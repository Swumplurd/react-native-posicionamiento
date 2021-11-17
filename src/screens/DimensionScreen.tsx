import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//const {width, height} = Dimensions.get('window')

export const DimensionScreen = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.caja1}/>
                <View style={styles.caja2}/>
            </View>
            <Text style={styles.title}>W: {width} H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'tomato'
    },
    caja1: {
        backgroundColor: 'purple',
        width: '20%',
        height: '50%'
    },
    caja2: {
        backgroundColor: 'orange',
    },
    title: {
        fontSize: 17
    }
})