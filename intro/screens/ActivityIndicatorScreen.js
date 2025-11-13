import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'

export default function ActivityIndicatorScreen() {
    const[cargando,setCargando] = useState(false);
    const[mostrarContenido,setMostrarContenido] = useState(false);
    const[mensajePrompt,setMensajePrompt] = useState("Presiona accion para comenzar: ");
    const mensajeCarga = () =>{
        setCargando(true);
        setMostrarContenido(false);
        setMensajePrompt("Cargando... por favor espere");
        setTimeout(() => {
            setCargando (false);
            setMostrarContenido(true);
            setMensajePrompt("Accion completada!");
        }, 3000);
    }

    const cancelarCarga = () => {
        setCargando(false);
        setMostrarContenido (false);
        setMensajePrompt("Accion cancelada. Presiona accion para comenzar");
    }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>Practica: Activity Indicator</Text>

      <Text style={styles.prompt}>{mensajePrompt}</Text>

      <View style={styles.botones}>

        <Button color="#1edb90f0"title='Iniciar Accion' onPress={mensajeCarga}/>

        <View style={{width: 10}}></View>

        <Button color="#f01e1e"title='Cancelar Accion' onPress={cancelarCarga}/>

      </View>

      {cargando && <ActivityIndicator size="large" color='#ee1bee3f' style={styles.indicador}/>}
      
      {mostrarContenido && (<Text style={styles.contenido}>Accion completada! </Text>)}

    </View>
  )

}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#393939ff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#ffffffff',
  }, 
  prompt: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3448faff',
  },
  botones: {
    flexDirection: 'row',
    marginBottom: 20, 
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',
  },
})