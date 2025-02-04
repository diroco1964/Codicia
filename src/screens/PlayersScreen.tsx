import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    Alert,
} from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Jugador } from '../interfaces/jugador';

type PlayersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayersScreen'>;

function PlayersScreen() {
    const navigation = useNavigation<PlayersScreenNavigationProp>();
    const [jugadores, setJugadores] = useState<Jugador[]>([]);       
    const [currentName, setCurrentName] = useState(''); // Nombre del jugador actual
    
    
    const crearJugador = () => {
        if (currentName.trim() === '') {
          Alert.alert('El nombre no puede estar vacío');
          return;
        }
    
        // Crear un nuevo jugador
        const nuevoJugador: Jugador = {
          nombre: currentName,
          puntaje: 0, // Puntaje inicial
          ranking: 0, // posicion inicial
        };

        setJugadores((prevJugadores) => [...prevJugadores, nuevoJugador]);

        setCurrentName(''); // Limpiar el nombre temporal
    }

    return (
        <View style={{}}>
            

            <TextInput
                label="Nombre Jugador"
                value={currentName}
                onChangeText={text => setCurrentName(text)}
            />

            <Button mode="contained" onPress={crearJugador}> 
            Agregar Jugador
            </Button>

            <FlatList
            data={jugadores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
             <View>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Puntaje: {item.puntaje}</Text>
            <Text>Ranking: {item.ranking}</Text>
          </View>
        )}
      />

            
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

export default PlayersScreen;


