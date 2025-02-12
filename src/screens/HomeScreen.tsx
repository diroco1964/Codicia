import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS, panelStyles } from '../styles/styles';
import CustomButton from '../components/CustomButton';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={[panelStyles.container, styles.container]}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>CODICIA... TU NUEVO JUEGO FAVORITO</Text>
      </View>

      <View style={styles.containerButton}>
        <CustomButton
          title="Iniciar"
          onPress={() => navigation.navigate("MenuScreen")}
          mode="elevated"
          disabled={false}
        ></CustomButton>

        <CustomButton
          title="BOTON DESHABILITADO DE EJEMPLO"
          onPress={() => navigation.navigate("PlayersScreen")}
          mode={"contained"}
          disabled={true}
        ></CustomButton>

        <CustomButton
          title="IR A JUGADORES"
          onPress={() => navigation.navigate("PlayersScreen")}
          mode={"contained"}
          disabled={false}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.violetaPrincipal
    },
    containerTitle: {
        justifyContent: 'flex-start', // Alinea el titulo en la parte superior
        marginTop: 20, // Margen superior
        alignItems: 'center', // Centra el titulo horizontalmente
        width: "80%"
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.blancoPrincipal
    },
    containerButton: {
        flex: 1, // Esto hace que los botones se ubiquen en la parte inferior
        justifyContent: 'flex-end', // Alinea los botones en la parte inferior
        alignItems: 'center', // Centra los botones horizontalmente
        marginBottom: 20, //Margen inferior,
        width: "80%",

    }
});

export default HomeScreen;


