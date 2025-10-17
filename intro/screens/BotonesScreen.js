import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

export default function BotonesScreen() {
  
  const [modoOscuro, setModoOscuro] = useState(false);

  const tema = modoOscuro ? styles.darkTheme : styles.lightTheme;
  const texto = modoOscuro ? styles.darkText : styles.lightText;

    return (
      <View style={[styles.container, tema]}>
        <Text style={[styles.title, texto]}>Pantalla de Botones y Switches</Text>
        <View style={styles.section}>
          <Text style={[styles.subitulo, texto]}>Botones</Text>
          <View style={styles.buttonContainer}>
            <Button title="Boton Azul" color='blue' onPress={() => {}}/>
            <Button title="Boton Verde" color='green' onPress={() => {}}/>
            <Button title="Boton Rojo" color='red' onPress={() => {}}/>
            <Button title="Boton Amarillo" color='yellow' onPress={() => {}}/>
            <Button title="Boton Morado" color='purple' onPress={() => {}}/>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.subitulo, texto]}>Switches</Text>
          <View style={styles.switchRow}>
            <Text style={texto}>Modo Oscuro</Text>
            <Switch value={modoOscuro} onValueChange={()=> setModoOscuro(!modoOscuro)} />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.estadoTexto, texto]}>Modo Oscuro: {modoOscuro ? 'Activado' : 'Desactivado'}</Text>

        </View>
        <StatusBar style='auto'/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lightTheme: {
    backgroundColor: '#f0f8ff',
  },
  darkTheme: {
    backgroundColor: '#2e2e2eff',
  },
  lightText: {
    color: 'black'
  },
  darkText: {
    color: 'white'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  section: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 25,
  },
  subitulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 5,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '100%',
    marginVertical: 5,
  },
  switchText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    marginTop: 15,
    alignItems: 'center',
  },
  estadoTexto: {
    fontSize: 15,
  }

})