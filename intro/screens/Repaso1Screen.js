import React, {useState} from 'react'
import { Text, StyleSheet, View, Button, Switch, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Platform, StatusBar } from 'react-native'

const back_img = require('../assets/Recursos/MAIN_IMAGE.jpg')

export default function Repaso1Screen() {
    
    const[nombre,setNombre] = useState("");
    const[correo,setCorreo] = useState("");
    const[terms,setTerms] = useState(false)

    const mostrarAlerta = () => {
        if (nombre.trim() === "" && correo.trim() ===""){
            if (Platform.OS === "web"){
                alert( "Por favor completa todos los campos.")
            }
            else {
                Alert.alert(
                "Error",
                "Por favor completa todos los campos.",
                [
                    {text: "OK"}
                ]
                );
            }
        }
        else if (!terms) {
             if (Platform.OS === "web"){
                alert( "Debes aceptar los terminos y condiciones")
            }
            else {
                Alert.alert(
                    "Terminos no Aceptados",
                    "Debes aceptar los terminos y condiciones",
                    [ 
                        {text: "OK"} 
                    ]
                );
            }
        }
        else {
            if (Platform.OS === "web"){
                alert( `Nombre: ${nombre} , Email: ${correo}`)
            }
            else {
                Alert.alert(
                "Registro Exitoso"
                `Nombre: ${nombre}`,
                `Email: ${correo}`,
                [
                    {text: 'OK'}
                ]
                );
            }     
        }
    }

    return (
        <ImageBackground source={back_img} resizeMode='cover' style={styles.mainBackground}>
            <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>
            <View style={styles.mainOverlay}>
                <Text style={styles.register}>Registro de Usuario</Text>
                <TextInput style={styles.input} placeholder="Nombre Completo" value={nombre} onChangeText={setNombre}/>
                <TextInput style={styles.input} placeholder="Correo Electronico" value={correo} onChangeText={setCorreo}/>
                <View style={styles.switchRow}>
                    <Text style={styles.terminos}>Aceptar Terminos y Condiciones </Text>
                    <Switch value={terms} onValueChange={()=> setTerms(!terms)}/>
                </View>
                <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
                    <Text style={styles.terminos}>Registrarse</Text>
                </TouchableOpacity>
            </View> 
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(28, 28, 28, 0.76)', 
    padding: 20,
    borderRadius: 12,
  },
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 15,
    marginBottom: 15,
  },
  register: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  terminos: {
    color: '#fff',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#474747ff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
})