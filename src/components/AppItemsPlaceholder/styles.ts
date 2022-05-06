import { StatusBar, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headBar: {
    height: StatusBar.currentHeight ? 72 + StatusBar.currentHeight : 108,
    width: '100%',
    backgroundColor: theme.colors.surface_primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 8,
  },

  headBarButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scrollView: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  contentBox: {
    width: '100%',
    backgroundColor: theme.colors.surface_primary,
    marginBottom: 24,
    padding: 40,
    borderRadius: 16,
  },

  contentBoxText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_secondary,
    fontSize: 16,
    lineHeight: 24,
  },

  blankBox: {
    width: '100%',
    height: 280,
    backgroundColor: theme.colors.surface_primary,
    marginBottom: 24,
    borderRadius: 16,
  },

  bottomNav: {
    flexDirection: 'row',
    height: 72 + getBottomSpace(),
    paddingVertical: 16,
    paddingHorizontal: 48,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface_primary,
    borderTopWidth: 1,
    borderTopColor: theme.colors.surface_secondary_hover,
  },
});