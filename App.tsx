import { StyleSheet, Text, View } from 'react-native';
import MyTitle from './components/title-component';
import { useState } from 'react';
import ButtonComponent from './components/button-component';
import ImagemComponent from './components/image-component';

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://sulcarro.com.br/uploads/blog/bugatti-la-voiture-noire-carros-de-luxo.jpg',
    'https://uploads.vrum.com.br/2022/12/8fb47a1a-range-rover-vogue-modelo-2022-cor-champanhe-de-frente-no-estudio.jpg',
    'https://image1.mobiauto.com.br/images/api/images/v1.0/43157426/transform/',
  ];

  const MudarImagem = () => {
    const newIndex = (imageIndex + 1) % images.length;
    setImageIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <MyTitle texto="State Image" />
      <ImagemComponent images={images} imageIndex={imageIndex} />
      <ButtonComponent trocarImg={MudarImagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
