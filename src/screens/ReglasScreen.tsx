import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';


type ReglasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ReglasScreen'>;

function ReglasScreen() {
    const navigtion = useNavigation<ReglasScreenNavigationProp>()

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Proba agregar botones. que sumen a distintos jugadores depende cual toques
            Deberias hacer varias constantes como sumaTotal de HomeScreen y que los distintos botenes ejecuten la suma total del jugadores
        </Text>
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

export default ReglasScreen;







