import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: getBottomSpace() + 16 + 72,
    right: 16,
  },

  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
    position: 'absolute',
  },
  indicator: {
    backgroundColor: theme.colors.surface_secondary,
    width: 56,
  },
});