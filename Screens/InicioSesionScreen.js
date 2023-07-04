import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Image } from 'react-native-elements';
import { ImageBackground } from 'react-native';

export function InicioSesionScreen({navigation}){
  return(
    <ImageBackground
      source={require('../Imagenes/Fondo.jpeg')}
      style={styles.backgroundImage}
    >
        <View style={styles.contenedor1}>
            <Text style={styles.titulo}>¡HOLA!</Text>
            <Text style={styles.subtitulo}>Bienvenido a BUDDY!</Text>
            <View style={styles.contenedor2}>
                <Text>Usuario</Text>
                <Text>Contraseña</Text>
                <TouchableOpacity style={[styles.boton,styles.shadowProp]}>
                    <Text>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 20,
  },

  subtitulo: {
    fontSize: 16,
  }

});