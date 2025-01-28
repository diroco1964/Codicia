import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    //A esto no le des mucha bola, se define de esta manera las variables que queres actualizar en tiempo real
    // por ejemplo sumas o datos tomados de un input.
    // Podes declarar la cantidad que quieras con distintos nombres y el parametro dentro de useState('parametro') puede ser un string
    // un number u otros tipos de datos.
    // para modificar el valor se hace atraves de la funcion setSumaTotal('parametro') donde el paremtro es el valor nuevo
    const [sumaTotal, setSumaTotal] = useState(0);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{sumaTotal}</Text>
            <Button onPress={() => {
                //Aca adentro le podes dar la funcionalidad al boton
                //Puede realizar una accion ejecutando una funcion como en este caso la suma
                //Tambien se pueden agregar condicionales para tomar distintas acciones

                if (sumaTotal < 9) {
                    setSumaTotal(sumaTotal + 1)
                } else {
                    setSumaTotal(0)
                    navigation.navigate('ReglasScreen')
                }
            }
            }>
                EJECUTAR ACCION
            </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '300',
        fontFamily: 'Roboto-Black'
    },
});

export default HomeScreen;


