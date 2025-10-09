//1.- Imports: Zona de Importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ContadorScreen from './screens/ContadorScreen';

//2.- Main: Zona de Componentes
export default function App() {

  return (

    <ContadorScreen></ContadorScreen>
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
