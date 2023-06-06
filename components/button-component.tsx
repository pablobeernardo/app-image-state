import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";

interface Props {
  trocarImg: any;
}

export default class ButtonComponent extends Component<Props> {
  render() {

    return (
      <View style={styles.estiloButton}>
        <Button onPress={this.props.trocarImg} title="Clique aqui" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    estiloButton: {
        borderRadius:15,
        padding:20, 
    },
  });