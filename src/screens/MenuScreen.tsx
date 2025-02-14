import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { COLORS,panelStyles } from '../styles/styles';
import CustomButton from '../components/CustomButton';


type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MenuScreen'>;

function MenuScreen() {
    const navigation = useNavigation<MenuScreenNavigationProp>()

    return (
        <View style={[panelStyles.container, styles.container]}>
           
           <View style={styles.containerButton}>
        <CustomButton
          title="REGLAS"
          onPress={() => navigation.navigate("HomeScreen")}
          mode="elevated"
          disabled={false}
          style={styles.squareButton}
          iconName='camera'
        ></CustomButton>

        <CustomButton
          title="GITHUB"
          onPress={() => navigation.navigate("HomeScreen")}
          mode="elevated"
          disabled={false}
          style={styles.squareButton}
          iconName='camera'
        ></CustomButton>
      </View>
        
      <View style={styles.containerButton}>
        <CustomButton
          title="JUGADORES"
          onPress={() => navigation.navigate("PlayersScreen")}
          mode="elevated"
          disabled={false}
          style={styles.squareButton}
          iconName='camera'
        />

        <CustomButton
          title="ranking"
          onPress={() => navigation.navigate("HomeScreen")}
          mode="elevated"
          disabled={false}
          style={styles.squareButton}
          iconName='camera'
        />
      </View>

        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.blancoPrincipal,
        flex: 1, // Asegura que la pantalla ocupe todo el espacio disponible
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
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
        flexDirection: 'row', // Distribuye los botones horizontalmente
        justifyContent: 'center', // Distribuye los botones con espacio entre ellos
        width: '80%', // Establece el ancho del contenedor de los botones
        marginBottom: 20, // Margen inferior para los botones

    },
    squareButton: {
        width: 70, // Ancho fijo para hacerlo cuadrado
        height: 70, // Alto fijo para hacerlo cuadrado
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Espaciado entre los botones
        borderRadius: 10, // Bordes redondeados, si quieres completamente cuadrado, puedes eliminarlo
        marginRight: 10, // Espaciado horizontal entre los botones (puedes ajustarlo para reducir el espacio)
    },
});


export default MenuScreen;







