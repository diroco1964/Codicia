import { StyleSheet } from "react-native";

export const COLORS = {
    violetaPrincipal: "#100329",
    blancoPrincipal: "#FFFFFF",
    violetaHabilitado: "#65558F",
    violetaDeshabilitado: "#EADDFF"
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



