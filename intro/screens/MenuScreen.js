import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroungScreen from './ImageBackgroungScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'

export default function MenuScreen() {

  const [screen,setScreen] = useState('menu');

  switch(screen){
      case 'contador':
        return <ContadorScreen/>
      case 'botones':
        return <BotonesScreen/>
      case 'texto':
        return <TextInputScreen/>
      case 'imagen':
        return <ImageBackgroungScreen/>
      case 'scroll':
        return <ScrollViewScreen/>
      case 'actividad':
        return <ActivityIndicatorScreen/>
      case 'lista':
        return <FlatListScreen/>
      case 'modal':
        return <ModalScreen/>
      case 'bottom':
        return <BottomScreen/>
      case 'menu':
        default:
          return (
              <View style={styles.botonesContainer}>
                <Text style = {styles.titulo}>Menu de Practicas</Text>
                <Button title='Pract:Contador' onPress={()=>setScreen('contador')}/>
                <Button title='Pract:Buttons' onPress={()=>setScreen('botones')}/>
                <Button title='Pract:Text Input & Alert' onPress={()=>setScreen('texto')}/>
                <Button title='Pract:Image Backgroung & SlapshScreen' onPress={()=>setScreen('imagen')}/>
                <Button title='Pract:ScrollView' onPress={()=>setScreen('scroll')}/>
                <Button title='Pract:ActivityIndicator' onPress={()=>setScreen('actividad')}/>
                <Button title='Pract:FlatList' onPress={()=>setScreen('lista')}/>
                <Button title='Pract:Modal' onPress={()=>setScreen('modal')}/>
                <Button title='Pract:Bottom Sheet' onPress={()=>setScreen('bottom')}/>
              </View>
          )
  }

}

const styles = StyleSheet.create({
  botonesContainer:{
      flex: 1,
      marginTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      backgroundColor: '#2e2e2eff',
  },
  titulo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
})