import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import successImage from '../../assets/success.png';
import { BottomSheetView } from '@gorhom/bottom-sheet';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({onSendAnotherFeedback} : Props) {
  return (
    <BottomSheetView style={styles.container}>
      <Image
        style={styles.successImage}
        source={successImage}
      />

      <Text style={styles.successTitle}>
        {'Agradecemos o feedback!'}
      </Text>

      <TouchableOpacity style={styles.button}
        onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonText}>
          {'Quero enviar outro'}
        </Text>
      </TouchableOpacity>

    </BottomSheetView>
  );
}