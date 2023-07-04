import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Image } from 'react-native-elements';
import { ImageBackground } from 'react-native';

export function InicioSesionScreen({navigation}){
  return(
    <ImageBackground
      source={require('../Imagenes/Fondo2.png')}
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
                <Text>¿Olvidaste tu contraseña?</Text>
                <Text>Ingresa con</Text>
                <Image
                    source={require('../Imagenes/facebook.png')}
                    style={styles.imagen}
                />
                <Image
                source={require('../Imagenes/social.png')}
                style={styles.imagen}
                />
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
    fontSize: 35,
    marginBottom: '5%',
  },

  subtitulo: {
    fontSize: 25,
  },

  contenedor1: {
    marginTop: '50%',
    alignItems: 'center',
  },

  contenedor2: {
    marginTop: '10%',
    backgroundColor: '#DDC4B8',
    alignItems:'center',
    justifyContent: 'flex-start',
    paddingTop: '17%',
    borderTopLeftRadius: 140,
    width: '80%',
    height: '100%',
    marginLeft: '20%',
  },

  boton:{
    borderRadius: 10,
    marginTop: '10%',
    backgroundColor: '#FFB984',
    width: '50%',
    height: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'center',
    marginBottom: '10%',
    alignItems: 'center',
    elevation: 10,
  },

  imagen: {
    width: 40, 
    height: 40,
  },

});