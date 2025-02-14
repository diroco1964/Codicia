import { StyleSheet } from "react-native";

export const COLORS = {
    violetaPrincipal: "#0c0018",
    blancoPrincipal: "#FFFFFF",
    violetaHabilitado: "#50036b",
    violetaDeshabilitado: "#cba2fc"
}

export const panelStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.blancoPrincipal,
  },
  //   header: {
  //     fontSize: fonts.lg,
  //     fontFamily: fonts.primary
  //   },
  //   section: {
  //     paddingVertical: padding.lg,
  //     paddingHorizontal: padding.xl
  //   }
});



