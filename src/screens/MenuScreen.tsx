import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { panelStyles } from '../styles/styles';


type ReglasScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MenuScreen'>;

function MenuScreen() {
    const navigtion = useNavigation<ReglasScreenNavigationProp>()

    return (
      <View style={panelStyles.container}>
        <Text>Agregar botones cuadrados de menu</Text>
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

export default MenuScreen;







