import React from 'react'
import { Text, View } from 'react-native'
import { AlignItems } from './src/screens/AlignItems'
import { AlignSelf } from './src/screens/AlignSelf'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { ContadorScreen } from './src/screens/ContadorScreen'
import { DimensionScreen } from './src/screens/DimensionScreen'
import { EjercicioBase } from './src/screens/EjercicioBase'
import { FlexDireccion } from './src/screens/FlexDireccion'
import { FlexExample } from './src/screens/FlexExample'
import { FlexWrap } from './src/screens/FlexWrap'
import { JustifyContent } from './src/screens/JustifyContent'
import { PosicionScreen } from './src/screens/PosicionScreen'

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionScreen /> */}
      {/* <PosicionScreen /> */}
      {/* <FlexExample /> */}
      {/* <FlexDireccion /> */}
      {/* <JustifyContent /> */}
      {/* <AlignItems /> */}
      {/* <AlignSelf /> */}
      {/* <FlexWrap /> */}
      {/* <EjercicioBase /> */}
      <ContadorScreen />
    </View>
  )
}

export default App;