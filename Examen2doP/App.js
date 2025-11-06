import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';

const SPLASH_IMAGE = require('../assets/images/SPLASH_IMAGE.png');
const MAIN_IMAGE = require('../assets/images/MAIN_IMAGE.jpg');
const LOGO_IMAGE = require('../assets/images/LOGO_IMAGE.png');

export default function examen() {

  const [isLoading, setisLoading] =useState(true);

  useEffect(() => {const timer = setTimeout(()=> {setisLoading(false);}, 3000);
    return () => clearTimeout(timer); }, []);

    if (isLoading) {
      return (
        <ImageBackground source={SPLASH_IMAGE} resizeMode='cover' imageStyle={styles.splash}>

          <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>

          <View style={styles.container}>

          <Image source={LOGO_IMAGE} style={styles.pfp} resizeMode='contain'/>

          <Text>Mi Galeria de Fotos</Text>
          <Text>Cargando...</Text>


          </View>
        </ImageBackground>
      );
    }

  return (
    <View>
    <Text>Mi Galeria de Fotografias</Text>

    <ScrollView style={styles.scroll} contentContainerStyle={styles.content} vertical={true} persistentScrollbar={true} scrollEnabled={true}>
        {items.map((item,index)=>(
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
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
    marginBottom
  }

});
