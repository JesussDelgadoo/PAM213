import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';

const SPLASH_IMAGE = require('../assets/images/SPLASH_IMAGE.png');
const MAIN_IMAGE = require('../assets/images/MAIN_IMAGE.jpg');
const LOGO_IMAGE = require('../assets/images/LOGO_IMAGE.png');  

export default function GaleriaScreen() {

  const [isLoading, setisLoading] =useState(true);

  useEffect(() => {const timer = setTimeout(()=> {setisLoading(false);}, 3000);
    return () => clearTimeout(timer); }, []);

    if (isLoading) {
      return (
        <ImageBackground source={SPLASH_IMAGE} resizeMode='cover' imageStyle={styles.splash}>

          <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>

          <View style={styles.splashOverlay}>

          <Image source={LOGO_IMAGE} style={styles.pfp} resizeMode='contain'/>

          <Text>Mi Galeria de Fotos</Text>
          <Text>Cargando...</Text>


          </View>
        </ImageBackground>
      );
    }

  return (
    <View style={styles.container}>
        <Text>Mi Galeria de Fotografias</Text>

        <ScrollView vertical={true} scrollEnabled={true}>
            <View style={styles.tarjeta}>
                <Text>Fotografia 1</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 1</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 1', 'Esta es la descripcion de la fotografia 1')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tarjeta}>
                <Text>Fotografia 2</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 2</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 2', 'Esta es la descripcion de la fotografia 2')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tarjeta}>
                <Text>Fotografia 3</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 3</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 3', 'Esta es la descripcion de la fotografia 3')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tarjeta}>
                <Text>Fotografia 4</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 4</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 4', 'Esta es la descripcion de la fotografia 4')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tarjeta}>
                <Text>Fotografia 5</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 5</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 5', 'Esta es la descripcion de la fotografia 5')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tarjeta}>
                <Text>Fotografia 6</Text>
                <Image source={MAIN_IMAGE} style={{width: 300, height: 200, borderRadius: 12}} resizeMode='cover'/>
                <Text>Descripcion de la fotografia 6</Text>
                <TouchableOpacity onPress={() => {alert('Fotografia 6', 'Esta es la descripcion de la fotografia 6')}}>
                    <Text>Ver Mas</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 25,
    borderRadius: 12,
  },
  splash: {
    opacity: 0.85,
  },
  splashText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pfp: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  tarjeta: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)', 
    padding: 20,
    borderRadius: 12,
  },

});
