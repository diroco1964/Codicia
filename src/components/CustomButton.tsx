import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, } from "react-native-paper";
import { COLORS } from "../styles/styles";

interface CustomButtonProps {
  onPress: Function;
  title: string;
  mode: "contained" | "outlined" | "elevated"
  disabled: boolean
  style?: object;
  iconName?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      style={[
        styles.button,
        props.disabled ? styles.deshabilitado : styles.habilitado,props.style,
      ]}
      mode={props.mode}
      onPress={() => props.onPress()}
      disabled={props.disabled}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
    button: {
      width:"100%",
      borderRadius: 20,
      margin: 5
    },
    habilitado: {
      backgroundColor: COLORS.violetaHabilitado
    },
    deshabilitado: {
      backgroundColor: COLORS.violetaDeshabilitado
    },
    text: {
        width:"90%",
        color: COLORS.blancoPrincipal,
        textAlign: "center",
        borderRadius: 20,

    },
    squareButton: {
      width: 100, // Ancho fijo
      height: 100, // Alto fijo
      justifyContent: "center", // Alinea el contenido (texto e icono) al centro
      alignItems: "center", // Centra el contenido
      marginBottom: 10, // Espaciado entre los botones
      borderRadius: 10, // Bordes redondeados (puedes poner 0 si quieres bordes rectos)
    },
  });

export default CustomButton;
