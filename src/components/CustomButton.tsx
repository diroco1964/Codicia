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
  icon?: any;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      style={[
        styles.button,
        props.style ? props.style : 
        props.square ? styles.squareButton : 
        props.disabled ? styles.deshabilitado : styles.habilitado,
      ]}
      mode={props.mode}
      onPress={() => props.onPress()}
      disabled={props.disabled}
      contentStyle={props.square ? styles.squareContent : undefined} // Ajustar contenido interno
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
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: COLORS.violetaClaro,
  },
  squareContent: {
    height: 104, 
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomButton;
