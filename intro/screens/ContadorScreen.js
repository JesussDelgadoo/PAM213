//1.- Imports: Zona de Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2.- Main: Zona de Componentes
export default function App() {

  const [contador, setcontador]= useState(0);

  return (

    <View style={styles.container}>
      
      <Text style= {styles.texto}>Contador:</Text>
      <Text style= {styles.texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>
      <Button color= 'green' title="Agregar" onPress={()=>setcontador(contador+1)}/>
      <Button color= 'red' title="Quitar" onPress={()=>setcontador(contador-1)}/>
      <Button color= 'black' title="Reiniciar" onPress={()=>setcontador(contador*0)}/>
      <StatusBar style="auto" />
      </View>

    </View>
  );
}

//3.- Styles: Zona de Estilos / Estica y Posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94b6e5ff',
    alignItems: 'center',
    justifyContent: 'center',
  },texto:{
      color:'#ffffffff',
      fontSize:30,
      fontFamily: 'Times New Romans',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'line-through',
  },
    texto2:{
      color:'#ffffffff',
      fontSize:35,
      fontFamily: 'Courier',
      fontWeight: '700',
      fontStyle: 'normal',
      textDecorationLine: 'underline',
  },
  botonesContainer:{
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
  },
});
