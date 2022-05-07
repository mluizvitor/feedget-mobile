import {Circle, List, Square} from 'phosphor-react-native';
import React, { ReactNode } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { theme } from '../../theme';

import bugyImage from '../../assets/bugy/image.png';
import bugyTypeface from '../../assets/bugy/typeface.png';

import { styles } from './styles';

interface Props {
  children?: ReactNode;
}

export function AppItemsPlaceholder({children}: Props) {
  return (
    <>
      <SafeAreaView style={styles.container} >
        {/* top header bar */}
        <View style={styles.headBar}>
          <List color={theme.colors.surface_secondary_hover}
            size={32}
            weight='bold'
            style={{marginBottom: 8}}/>

          <View style={styles.headBarButtons}>
            <Square size={32}
              weight='fill'
              color={theme.colors.surface_secondary_hover}
              style={{marginRight: 16}}/>

            <Square size={32}
              weight='fill'
              color={theme.colors.surface_secondary_hover}
              style={{marginRight: 16}}/>

            <Circle weight='fill'
              size={48}
              color={theme.colors.surface_secondary_hover} />
          </View>
        </View>

        {/* box list */}
        <ScrollView style={styles.scrollView} >
          <View style={styles.contentBox}>
            <Text style={styles.contentBoxText}>
              {'Experimente enviar um feedback de um bug na aplicação 🐛'}
            </Text>
          </View>

          <View style={styles.blankBox}>
            <Image source={bugyImage}
              style={styles.bugyImage}/>
            <Text style={styles.bugyTypeface}>
              {'Bugy Image Card'}
            </Text>
          </View>

          <View style={styles.blankBox}>
            <Image source={bugyTypeface}
              style={styles.bugyImage}/>
            <Text style={styles.bugyTypeface}>
              {'Bugy Typeface Card'}
            </Text>
          </View>

          <View style={styles.blankBox} />

          <View style={{height: 16+16+48}} />

        </ScrollView>
      
        {children}

        {/* bottom navigation */}
        <View style={styles.bottomNav}>
          <Square size={40}
            weight='fill'
            color={theme.colors.surface_secondary_hover}/>

          <Square size={40}
            weight='fill'
            color={theme.colors.surface_secondary_hover}/>

          <Square size={40}
            weight='fill'
            color={theme.colors.surface_secondary_hover}/>
        
          <Square size={40}
            weight='fill'
            color={theme.colors.surface_secondary_hover}/>
        </View>

      </SafeAreaView>
    </>
  );
}