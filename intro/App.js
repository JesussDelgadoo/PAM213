//1.- Imports: Zona de Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2.- Main: Zona de Componentes
export default function App() {

  const [contador, setcontador]= useState(0);

  return (

    <View style={styles.container}>
      
      <Text>Contador: {contador} </Text>
      <Button title="Agregar" onPress={()=>setcontador(contador+1)}/>
      <Button title="Quitar" onPress={()=>setcontador(contador-1)}/>
      <Button title="Reiniciar" onPress={()=>setcontador(contador*0)}/>
      <StatusBar style="auto" />

    </View>
  );
}

//3.- Styles: Zona de Estilos / Estica y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
