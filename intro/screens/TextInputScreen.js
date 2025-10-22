import React,{useState} from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert, Platform } from 'react-native'

export default function TextInputScreen() {
    
  const[nombre,setNombre] = useState("");
  const[pass,setPass] = useState("");
  const[comentario,setComentario] = useState("");

  const mostrarAlerta = () => {
    
    if (nombre.trim() === ""){
      if (Platform.OS === "web"){
        alert("Por favor, escribe tu nombre antes de continuar")
      }
      else {
        Alert.alert(
          "Atencion",
          "Por favor, escribe tu nombre antes de continuar",
          [
            {text: "cancelar"},
            {text: "aceptar"}
          ]
        );
      }
    }
    else {
      if (Platform.OS === "web"){
        alert(`Bienvenido, ${nombre}!`);
      }
      else {
        Alert.alert(
          `hola`, `Bienvenido, ${nombre}!`,
          [
            {text: 'cancelar'},
            {text: 'aceptar'}
          ]
        );
      }
    }
  }

  return(
    <View style = {styles.container}>
      <Text style = {styles.titulo}>Practica: TextInput y Alert</Text>

      <TextInput style={styles.input} placeholder="Escribe tu nombre" value={nombre} onChangeText={setNombre}/>
      <TextInput style={styles.input} placeholder="Escribe tu contraseña" secureTextEntry={true} keyboardType='numeric' value={pass} onChangeText={setPass}/>
      <TextInput style={styles.input} placeholder="Escribe tus comentarios" multiline={true} value={comentario} onChangeText={setComentario}/>
      <Button title='Mostrar alerta' onPress={mostrarAlerta}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303135ff',
    padding: 20
  },
  titulo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 15,
    marginBottom: 15,
  }
})