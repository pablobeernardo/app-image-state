import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  texto: string;
}

export default class MyTitle extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.estiloTexto}>{this.props.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    estiloTexto: {
        fontSize:35,
        fontWeight:'bold',
        padding: 20,
        opacity:0.8
      
    },
  });
  
