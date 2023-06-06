import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface Props {
  images: string[];
  imageIndex: number;
}

const ImagemComponent: React.FC<Props> = ({ images, imageIndex }) => {
  const currentImage = images[imageIndex];

  return (
    <View>
      <Image  source={{ uri: currentImage }} style={styles.estiloImagem} />
    </View>
  );
};

export default ImagemComponent;

const styles = StyleSheet.create({
    estiloImagem: {
        borderRadius:15,
        width: 200, 
        height: 200,
        padding:10, 
      
    },
  });
  

