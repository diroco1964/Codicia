import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { Jugador } from "../interfaces/jugador";
import { COLORS, panelStyles } from "../styles/styles";
import AddUser from "../assets/icons/AddUser";

type PlayersScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PlayersScreen"
>;

function PlayersScreen() {
  const navigation = useNavigation<PlayersScreenNavigationProp>();
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [currentName, setCurrentName] = useState(""); // Nombre del jugador actual
  const [puntosRonda, setPuntosRonda] = useState(""); // Puntos de la ronda para sumar
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState<number | null>(
    null
  ); // Índice del jugador seleccionado
  const rondas = 6;

  // Crear un nuevo jugador
  const crearJugador = () => {
    if (currentName.trim() === "") {
      Alert.alert("El nombre no puede estar vacío");
      return;
    }

    const nuevoJugador: Jugador = {
      nombre: currentName,
      puntajePorRonda: Array(rondas).fill(0), // Puntaje inicial
      ranking: 0, // posicion inicial
    };

    setJugadores((prevJugadores) => [...prevJugadores, nuevoJugador]);

    setCurrentName(""); // Limpiar el nombre temporal
  };

  // Sumar puntos a la casilla de la ronda
  const sumarPuntos = () => {
    const puntos = parseInt(puntosRonda);

    if (isNaN(puntos) || puntos < 0) {
      Alert.alert("Por favor, ingrese un número de puntos válido.");
      return;
    }

    if (jugadorSeleccionado === null) {
      Alert.alert("Por favor, seleccione un jugador");
      return;
    }

    setJugadores((prevJugadores) => {
      const nuevosJugadores = [...prevJugadores];
      const jugador = nuevosJugadores[jugadorSeleccionado];
      jugador.puntajePorRonda[
        jugador.puntajePorRonda.findIndex((p) => p === 0)
      ] = puntos; // Llenamos la primer casilla vacía con los puntos
      return nuevosJugadores;
    });

    setPuntosRonda(""); // Limpiar la casilla de puntos
  };

  // Calcular el puntaje total de un jugador
  const calcularTotalPuntos = (jugador: Jugador) => {
    return jugador.puntajePorRonda.reduce((acc, puntos) => acc + puntos, 0);
  };

  // Resetear los puntos de un jugador
  const resetearPuntosJugador = (index: number) => {
    setJugadores((prevJugadores) => {
      const nuevosJugadores = [...prevJugadores];
      nuevosJugadores[index].puntajePorRonda = Array(rondas).fill(0); // Resetear todos los puntos a 0
      return nuevosJugadores;
    });
  };

  // Calcular y actualizar el ranking
  const actualizarRanking = () => {
    const jugadoresOrdenados = [...jugadores].sort(
      (a, b) => calcularTotalPuntos(b) - calcularTotalPuntos(a)
    );
    setJugadores(
      jugadoresOrdenados.map((jugador, index) => ({
        ...jugador,
        ranking: index + 1, // Asignar el ranking de 1 a N
      }))
    );
  };

  const renderJugador = ({ item, index }: { item: Jugador; index: number }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.nombreJugador}>{item.nombre}</Text>
        {item.puntajePorRonda.map((puntos, rondaIndex) => (
          <TextInput
            key={rondaIndex}
            style={styles.casilla}
            value={puntos ? puntos.toString() : ""}
            onChangeText={(text) => {
              const newPuntos = parseInt(text);
              if (!isNaN(newPuntos)) {
                setJugadores((prevJugadores) => {
                  const nuevosJugadores = [...prevJugadores];
                  nuevosJugadores[index].puntajePorRonda[rondaIndex] =
                    newPuntos;
                  return nuevosJugadores;
                });
              }
            }}
            keyboardType="numeric"
          />
        ))}
        <Text style={styles.total}>
          Total: {calcularTotalPuntos(item)} puntos
        </Text>

        <Button
          mode="contained"
          onPress={() => resetearPuntosJugador(index)}
          style={styles.botonResetear}
        >
          Codicia
        </Button>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={panelStyles.container}>
      <View
        style={styles.containerPlayer}
      >
        <TextInput
          style={{ width: "80%", alignSelf: "flex-start" }}
          label="Nombre Jugador"
          value={currentName}
          onChangeText={(text) => setCurrentName(text)}
        />
        <Button
          style={{
            marginLeft: "5%",
            width: "25%",
            alignSelf: "center",
            justifyContent: "center",
            backgroundColor: COLORS.violetaHabilitado
          }}
          mode="contained"
          onPress={crearJugador}
          
        >
          
          <AddUser/>
        </Button>
      </View>

      <FlatList
        data={jugadores}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJugador}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex para que el contenedor ocupe toda la pantalla
    justifyContent: "center", // Centrar los elementos verticalmente
    alignItems: "center", // Centrar los elementos horizontalmente
    padding: 16,
    flexDirection: "column",
  },
  containerPlayer: {
    width: "80%", // Hace que el contenedor del input ocupe todo el ancho
    flexDirection: "row", // Alineación horizontal de los elementos dentro del contenedor
    justifyContent: "space-between", // Espacio entre el input y el botón
    alignItems: "center", // Alinea el input y el botón verticalmente
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // Espacio entre el texto y los botones
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  button: {
    marginBottom: 10,
  },
  row: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
  },
  nombreJugador: {
    fontSize: 16,
    fontWeight: "bold",
  },
  casilla: {
    width: 50,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    marginRight: 5,
  },
  puntaje: {
    fontSize: 14,
    marginTop: 4,
  },
  ranking: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: "bold",
  },
  total: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  botonResetear: {
    marginTop: 10,
    backgroundColor: "#8A2BE2", // violeta casino
  },
});

export default PlayersScreen;
