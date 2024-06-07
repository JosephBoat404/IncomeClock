import React from 'react';
import SecondBox from "../component/SecondBox.js";
import ThirdBox from "../component/ThirdBox.js"
import SpaceBetweenTab from './SpaceBetweenTab.js';

import styles from "../Style/Styling";
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SecondBox />
      <ThirdBox />
      <SpaceBetweenTab />
    </View>
  );
}
