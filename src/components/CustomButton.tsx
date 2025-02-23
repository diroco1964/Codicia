import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { COLORS } from "../styles/styles";

interface CustomButtonProps {
  onPress: Function;
  title: string;
  mode: "contained" | "outlined" | "elevated";
  disabled: boolean;
  style?: object;
  square?: boolean;
  circle?: boolean;
  icon?: any;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      style={[
        styles.button,
        props.style ? props.style :
          props.square ? styles.squareButton :
          props.circle? styles.circleButton :
            props.disabled ? styles.deshabilitado : styles.habilitado,
      ]}
      mode={props.mode}
      onPress={() => props.onPress()}
      disabled={props.disabled}
      
      contentStyle={props.square ? styles.squareContent : props.circle? styles.circleContent : undefined} // Ajustar contenido interno
    >
      <View style={styles.innerContainer}>
        {props.icon}
        <Text style={[styles.text, props.square && styles.textSquare]}>
          {props.title}
        </Text>
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 20,
    margin: 5,
  },
  habilitado: {
    backgroundColor: COLORS.violetaHabilitado,
  },
  deshabilitado: {
    backgroundColor: COLORS.violetaDeshabilitado,
  },
  text: {
    color: COLORS.blancoPrincipal,
    textAlign: "center",
    fontSize: 12,
  },
  textSquare: {
    color: COLORS.violetaPrincipal,
    fontSize: 12,
  },
  squareButton: {
    width: 104,
    height: 104,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: COLORS.violetaClaro,
  },
  squareContent: {
    height: 104,
    justifyContent: "center",
  },
  circleButton: {
    width: 50,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Esto asegura que sea completamente redondo.
    backgroundColor: COLORS.violetaHabilitado,
  },
  
  circleContent: {
    height: 36,
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",  // Ajuste a row si es necesario, para una distribución en línea
    justifyContent: "center",
    alignItems: "center",  // Asegúrate de que el contenido esté centrado
  },
});

export default CustomButton;
