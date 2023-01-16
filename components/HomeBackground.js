import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://www.tinypulse.com/hubfs/Building_Bridges.png'};

const HomeBackground = () => (
    <ImageBackground source={image} resizeMode='stretch' style={styles.image}></ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default HomeBackground;