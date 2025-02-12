import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { COLORS } from "../styles/styles";

interface CustomButtonProps {
  onPress: Function;
  title: string;
  mode: "contained" | "outlined" | "elevated"
  disabled: boolean
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      style={[
        styles.button,
        props.disabled ? styles.deshabilitado : styles.habilitado,
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

    }
  });

export default CustomButton;
