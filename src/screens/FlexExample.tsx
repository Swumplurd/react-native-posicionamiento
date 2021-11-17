import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexExample = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, backgroundColor: 'red'}}/>
            <View style={{flex: 2, backgroundColor: 'darkorange'}}/>
            <View style={{flex: 2, backgroundColor: 'green'}}/>
            <View style={{flex: 1, backgroundColor: 'cyan'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})