import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import R from '../resources/R';

interface LoaderProps {
  size?: number | 'large' | 'small' | undefined;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Loader: React.FC<LoaderProps> = ({size = 'large'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={R.colors.black} size={size} />
    </View>
  );
};
