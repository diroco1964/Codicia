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

type PlayersScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayersScreen'>;

function PlayersScreen() {
    const navigation = useNavigation<PlayersScreenNavigationProp>();
    const [numPlayers, setNumPlayers] = useState(0);  // Número de jugadores
    const [players, setPlayers] = useState(0);       // Número de jugadores
    const [currentName, setCurrentName] = useState(''); // Nombre del jugador actual
    const [currentScore, setCurrentScore] = useState(0); // Puntaje actual del jugador

    return (
        <View style={{}}>
             <Text>{numPlayers}</Text>
                        <Button mode='outlined' onPress={() => {
                            if (numPlayers < 9) {
                                setNumPlayers(numPlayers + 1)
                            } else {
                               Alert.alert("No se pueden agragar más jugadores")
                            }
                        }
                        }>
                            NÚMERO DE JUGADORES
                        </Button>

            {/*<TextInput
                label="Número de Jugadores"
                value={numPlayers}
                onChangeText={text => setNumPlayers(text)}
            />*/}
            <Text>Cantidad de Jugadores{numPlayers}</Text>

            <Button
                onPress={() => navigation.navigate('PlayersScreen')}
            >
                Confirmar
            </Button>
            <IconButton
                icon={"camera"}
                iconColor={"purple"}
                size={20}
                mode='outlined'
                onPress={() => {
                    if (numPlayers < 9) {
                        setNumPlayers(numPlayers + 1)
                    } else {
                       Alert.alert("No se pueden agragar más jugadores")
                    }
                }
                }
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


